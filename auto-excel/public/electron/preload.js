const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("ipc", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => {
    ipcRenderer.on(channel, (event, arg) => callback(arg));
  },
  off: (channel, callback) => {
    ipcRenderer.removeListener(channel, callback);
  },
  offAll: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});