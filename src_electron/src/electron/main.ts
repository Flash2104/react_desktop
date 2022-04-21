import { app, BrowserWindow } from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
import * as isDev from "electron-is-dev";
import * as path from "path";
// import isDev from "electron-is-dev";
// import path from "path";
import * as url from "url";
// const { app, BrowserWindow } = require("electron");
// const {
//   default: installExtension,
//   REDUX_DEVTOOLS,
//   REACT_DEVELOPER_TOOLS,
// } = require("electron-devtools-installer");
// const isDev = require("electron-is-dev");
// const i18nextBackend = require("i18next-electron-fs-backend");
// const i18nextMainBackend = require("../localization/i18n.mainconfig");
// const path = require("path");
// const url = require("url");

// declare global {
//   const MAIN_WINDOW_WEBPACK_ENTRY: string;
//   const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
// }
let mainWindow = null;
// Create the native browser window.

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    darkTheme: true,
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      devTools: isDev,
      // nodeIntegration: true,
      // additionalArguments: [`storePath:${app.getPath("userData")}`],
    },
  });
  const appURL = !isDev
    ? url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";

  mainWindow.loadURL(appURL);
  // mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // Automatically open Chrome's DevTools in development mode.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
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
  contents.on("will-navigate", (ev, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});
