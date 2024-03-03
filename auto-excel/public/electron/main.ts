import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import { openFile } from "./handler";
import editExcel from "./edit_excel";
import { readExcel } from "./read_excel";

const isDev = !app.isPackaged;
let mainWindow: BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 450,
    height: 660,
    center: true,
    resizable: true,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true,
      devTools: isDev,
      preload: path.join(__dirname, isDev ? "../../public/electron/preload.js" : "../../build/electron/preload.js"),
    },
    title: "Auto Excel - 엑셀 자동화 프로그램",
    icon: path.join(__dirname, isDev ? "../../public/favicon.ico" : "../../build/favicon.ico"),
  });

  // production에서는 패키지 내부 리소스(file://...)에 접근
  // 개발 중에는 개발 도구에서 호스팅하는 주소(localhost:3000)에서 로드
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../../build/index.html")}`);
  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setMenu(null);
  mainWindow.setMinimumSize(430, 620);
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

ipcMain.on("open-file", () => openFile(mainWindow));
ipcMain.on("read-excel", (e, data) => readExcel(mainWindow, data));
ipcMain.on("edit-excel", (e, data) => editExcel(mainWindow, data));

