/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import { app, BrowserWindow, ipcMain, shell } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';
import i18n from '../localization/i18next.backend';
import { ILanguageChanged } from '../localization/i18next.client';
import MenuBuilder from './menu';
import { createContext } from './trpc-server/router/context';
import { routers } from './trpc-server/router/router';
import {
  IpcRpcRequest,
  resolveIPCResponse,
} from './trpc-server/trps-internals';
// import { i18nextNamespace } from './preload';
import {
  changeLanguageRequest,
  i18nextNamespace,
  resolveHtmlPath,
} from './util';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  i18n.on('initialized', (loaded) => {
    console.log('i18n loaded', loaded);
    i18n.changeLanguage('en');
    i18n.off('initialized');
  });

  i18n.on('languageChanged', (lng) => {
    if (i18n.isInitialized) {
      menuBuilder.buildMenu(i18n);
      mainWindow?.webContents.send(changeLanguageRequest, {
        language: lng,
        namespace: i18nextNamespace,
        resource: i18n.getResourceBundle(lng, i18nextNamespace),
      } as ILanguageChanged);
    }
  });

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();

  // handle tRPC requests coming from the renderer process
  ipcMain.handle('rpc', async (event, req: IpcRpcRequest) => {
    // console.log(arg)

    const output = await resolveIPCResponse({
      batching: {
        enabled: !!req.isBatch,
      },
      req: req,
      router: routers(),
      createContext: () => createContext({ event, req }),
    });

    return {
      ...output,
      id: req.id,
    };
  });

  ipcMain.on('log', (event, msg) => {
    log.error('Client error: ' + msg);
  });
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

// ipcMain.on('get-initial-translation', (event, arg) => {
//   i18n.loadLanguages('en', (err, t) => {
//     const initial = {
//       en: {
//         translation: i18n.getResourceBundle('en', 'translation'),
//       },
//     };
//     event.returnValue = initial;
//   });
// });
