"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var handler_1 = require("./handler");
var isDev = !electron_1.app.isPackaged;
var mainWindow;
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 450,
        height: 600,
        center: true,
        resizable: true,
        fullscreen: false,
        fullscreenable: true,
        webPreferences: {
            sandbox: false,
            nodeIntegration: false,
            contextIsolation: true,
            devTools: isDev,
            preload: path.join(__dirname, isDev ? "../../src/electron/preload.js" : "../../build/electron/preload.js")
        },
        title: "Auto Excel - 엑셀 자동화 프로그램"
    });
    // production에서는 패키지 내부 리소스(file://...)에 접근
    // 개발 중에는 개발 도구에서 호스팅하는 주소(localhost:3000)에서 로드
    mainWindow.loadURL(isDev ? "http://localhost:3000" : "file://".concat(path.join(__dirname, "../build/index.html")));
    if (isDev)
        mainWindow.webContents.openDevTools({ mode: "detach" });
    mainWindow.setMenu(null);
    mainWindow.setMinimumSize(430, 580);
    mainWindow.setResizable(true);
    mainWindow.on("closed", function () { return (mainWindow = undefined); });
    mainWindow.focus();
};
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
electron_1.ipcMain.on("open-file", function () { return (0, handler_1.openFile)(mainWindow); });
