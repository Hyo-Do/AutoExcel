import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import { openFile } from "./handler";

const isDev = !app.isPackaged;
let mainWindow: BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 700,
    center: true,
    resizable: true,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true,
      devTools: isDev,
      preload: path.join(__dirname, isDev ? "../../src/electron/preload.js" : "../../build/electron/preload.js"),
    },
    autoHideMenuBar: true,
    title: "Auto Excel - 엑셀 자동화 프로그램",
  });

  // production에서는 패키지 내부 리소스(file://...)에 접근
  // 개발 중에는 개발 도구에서 호스팅하는 주소(localhost:3000)에서 로드
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => (mainWindow = undefined!));
  mainWindow.focus();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("open-file", () => openFile());
