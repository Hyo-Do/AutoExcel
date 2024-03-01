"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var mainWindow;
var isDev = !electron_1.app.isPackaged;
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 900,
        height: 680,
        center: true,
        resizable: true,
        fullscreen: false,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: isDev
        }
    });
    // production에서는 패키지 내부 리소스(file://...)에 접근
    // 개발 중에는 개발 도구에서 호스팅하는 주소(localhost:3000)에서 로드
    mainWindow.loadURL(isDev ? "http://localhost:3000" : "file://".concat(path.join(__dirname, "../build/index.html")));
    if (isDev)
        mainWindow.webContents.openDevTools({ mode: "detach" });
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
