import { app, BrowserWindow } from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
import isDev from "electron-is-dev";
// import url from "url";

// const url = require("url");
// const isDev = require("electron-is-dev");

declare global {
  const MAIN_WINDOW_WEBPACK_ENTRY: string;
  const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
}

let mainWindow: null | BrowserWindow = null;
// Create the native browser window.
async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY, //path.join(__dirname, "preload.ts"),
      devTools: isDev,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // Automatically open Chrome's DevTools in development mode.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
// function setupLocalFilesNormalizerProxy() {
//   protocol.registerHttpProtocol(
//     "file",
//     (request, callback) => {
//       const url = request.url.substr(8);
//       callback({ path: path.normalize(`${__dirname}/${url}`) });
//     },
//     (error) => {
//       if (error) console.error("Failed to register protocol");
//     }
//   );
// }

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS, {
      loadExtensionOptions: { allowFileAccess: true },
      forceDownload: false,
    });
  }
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
const allowedNavigationDestinations = "https://my-electron-app.com";
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// handle tRPC requests coming from the renderer process
// ipcMain.handle('rpc', async (event, req: IpcRpcRequest) => {
//   // console.log(arg)

//   const output = await resolveIPCResponse({
//     batching: {
//       enabled: !!req.isBatch
//     },
//     req: req,
//     router: appRouter,
//     createContext: () => createContext({ event, req })
//   });

//   return {
//     ...output,
//     id: req.id
//   };
// });
