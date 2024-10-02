"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var mainWindow;
var isDev = process.env.IS_DEV == "true";
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 760,
        center: true,
        resizable: true,
        fullscreen: false,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            webviewTag: false,
            preload: path.join(__dirname, "preload.js"),
            devTools: isDev,
        },
        title: "타이틀 입니다",
    });
    /**
     * 운영: 패키지 내부 리소스(file://...)에 접근
     * 개발: 개발 도구에서 호스팅하는 주소(localhost:5173)에서 로드
     */
    mainWindow.loadURL(isDev ? "http://localhost:5173" : "file://".concat(path.join(__dirname, "../build/index.html")));
    if (isDev)
        mainWindow.webContents.openDevTools({ mode: "detach" });
    mainWindow.setMenu(null);
    mainWindow.setSize(420, 560);
    mainWindow.setResizable(false);
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
