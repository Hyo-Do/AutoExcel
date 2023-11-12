const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipc", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  sendSync: (channel, data) => ipcRenderer.sendSync(channel, data),
  on: (channel, callback) => {
    ipcRenderer.on(channel, (event, arg) => callback(arg));
  },
  offAll: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  },
});
