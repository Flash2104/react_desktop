"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// const { contextBridge, ipcRenderer } = require("electron");
var electron_1 = require("electron");
process.once("loaded", function () {
    electron_1.contextBridge.exposeInMainWorld("ariNote", {
        rpc: function (op) { return electron_1.ipcRenderer.invoke("rpc", op); },
        receive: function (channel, func) {
            var validChannels = ["app"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                electron_1.ipcRenderer.removeAllListeners(channel);
                electron_1.ipcRenderer.on(channel, function (event) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return func.apply(void 0, args);
                });
            }
        },
        appPlatform: process.platform,
    });
});
//# sourceMappingURL=preload.js.map