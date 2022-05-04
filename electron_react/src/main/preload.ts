import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import path from 'path';

export interface IElectronApi {
  platform: NodeJS.Platform;
  environment: 'development' | 'production';
  resourcesPath: string;
  i18next: {
    onLanguageChange: (func: (lng: string) => void) => void;
  };
  ipcRenderer: {
    myPing(): void;
    on(
      channel: string,
      func: (...args: unknown[]) => void
    ): (() => void) | undefined;
    once(channel: string, func: (...args: unknown[]) => void): void;
  };
}

// export const changeLanguageRequest = 'ChangeLanguage-Request';

contextBridge.exposeInMainWorld('electron', <IElectronApi>{
  platform: process.platform,
  environment: process.env.NODE_ENV,
  resourcesPath: path.join(process.resourcesPath, '..'),
  i18next: {
    onLanguageChange(func: (lng: string) => void) {
      ipcRenderer.on('ChangeLanguage-Request', (event, args) => func(args.lng));
    },
  },
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel: string, func: (...args: unknown[]) => void) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
          func(...args);
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, subscription);

        return () => ipcRenderer.removeListener(channel, subscription);
      }

      return undefined;
    },
    once(channel: string, func: (...args: unknown[]) => void) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (_event, ...args) => func(...args));
      }
    },
  },
});
