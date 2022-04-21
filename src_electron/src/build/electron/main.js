"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_devtools_installer_1 = __importStar(require("electron-devtools-installer"));
var isDev = __importStar(require("electron-is-dev"));
var path = __importStar(require("path"));
// import isDev from "electron-is-dev";
// import path from "path";
var url = __importStar(require("url"));
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
var mainWindow = null;
// Create the native browser window.
function createWindow() {
    return __awaiter(this, void 0, void 0, function () {
        var appURL;
        return __generator(this, function (_a) {
            mainWindow = new electron_1.BrowserWindow({
                width: 800,
                height: 600,
                darkTheme: true,
                // Set the path of an additional "preload" script that can be used to
                // communicate between node-land and browser-land.
                webPreferences: {
                    preload: path.join(__dirname, "preload.js"),
                    devTools: isDev,
                    // nodeIntegration: true,
                    // additionalArguments: [`storePath:${app.getPath("userData")}`],
                },
            });
            appURL = !isDev
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
            mainWindow.on("closed", function () {
                // Dereference the window object, usually you would store windows
                // in an array if your app supports multi windows, this is the time
                // when you should delete the corresponding element.
                mainWindow = null;
            });
            return [2 /*return*/];
        });
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
electron_1.app.whenReady().then(function () {
    createWindow();
    if (isDev) {
        (0, electron_devtools_installer_1.default)(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS, {
            loadExtensionOptions: { allowFileAccess: true },
            forceDownload: false,
        });
    }
    electron_1.app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
var allowedNavigationDestinations = "https://my-electron-app.com";
electron_1.app.on("web-contents-created", function (event, contents) {
    contents.on("will-navigate", function (ev, navigationUrl) {
        var parsedUrl = new URL(navigationUrl);
        if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
            event.preventDefault();
        }
    });
});
//# sourceMappingURL=main.js.map