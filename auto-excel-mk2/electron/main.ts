import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow;
const isDev: boolean = process.env.IS_DEV == "true";

const createWindow = () => {
  mainWindow = new BrowserWindow({
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
  mainWindow.loadURL(isDev ? "http://localhost:5173" : `file://${path.join(__dirname, "../build/index.html")}`);

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setMenu(null);
  mainWindow.setSize(420, 560);
  mainWindow.setResizable(false);
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