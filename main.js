const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("execute", (event, arg) => {
    console.log(">> start")
    console.log(`arg: [${arg.val1}, ${arg.val2}]`)
    const filePath = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [{ name: 'Excel Files', extensions: ['xlsx'] }],
    });
    console.log(filePath);


    console.log(">> end");
});
