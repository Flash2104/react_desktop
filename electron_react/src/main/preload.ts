import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { ILanguageChanged } from 'localization/i18next.client';
import path from 'path';
import { changeLanguageRequest, i18nextNamespace } from './util';
// import { changeLanguageRequest, i18nextNamespace } from './main';

export interface IElectronApi {
  platform: NodeJS.Platform;
  environment: 'development' | 'production';
  resourcesPath: string;
  i18next: {
    send: (channel: string, data: any) => void;
    onReceive: (channel: string, func: (args: any) => void) => void;
    onLanguageChange: (func: (message: ILanguageChanged) => void) => void;
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
    // send: (channel: string, data: any) => {
    //   const validChannels = [readFileRequest, writeFileRequest];
    //   if (validChannels.includes(channel)) {
    //     ipcRenderer.send(channel, data);
    //   }
    // },
    // onReceive: (channel: string, func: (args: any) => void) => {
    //   const validChannels = [readFileResponse, writeFileResponse];
    //   if (validChannels.includes(channel)) {
    //     // Deliberately strip event as it includes "sender"
    //     ipcRenderer.on(channel, (event, args) => func(args));
    //   }
    // },
    onLanguageChange(func: (message: ILanguageChanged) => void) {
      ipcRenderer.on(changeLanguageRequest, (event, args: ILanguageChanged) =>
        func({
          language: args.language,
          namespace: args.namespace,
          resource: args.resource,
        })
      );
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
