// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { contextBridge, ipcRenderer } from "electron";

process.once("loaded", () => {
  console.log("PRELOADED PROCESS");
  contextBridge.exposeInMainWorld("ariNote", {
    rpc: (op: {
      type: "query" | "mutation" | "subscription";
      input: unknown;
      path: string;
    }) => ipcRenderer.invoke("rpc", op),
    receive: (channel: string, func: (...args: any) => void) => {
      const validChannels = ["app"];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.removeAllListeners(channel);
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    appPlatform: process.platform,
  });
});
