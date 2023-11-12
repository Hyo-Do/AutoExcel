const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const ExcelJS = require("exceljs");
const fs = require("fs");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 380,
    resizable: false,
    fullscreen: false,
    fullscreenable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");
  mainWindow.setMenu(null);
  //   mainWindow.webContents.openDevTools({ mode: "detach" });

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

/** MAIN PROCESS */
const getRangeArray = (start, end) => Array.from({ length: end + 1 - start }, (_, index) => start + index);

function getRandomValue(base, offset) {
  let randomOffset = Math.random() * offset;
  randomOffset = randomOffset > offset * 0.6 ? Math.random() * randomOffset : randomOffset;
  randomOffset = Math.random() < 0.5 ? -randomOffset : randomOffset;
  return base + randomOffset;
}

ipcMain.on("execute", async (event, arg) => {
  const vBase = arg.val1,
    vOffset = arg.val2,
    iBase = arg.val3,
    iOffset = arg.val4;

  const filePaths = dialog.showOpenDialogSync({
    properties: ["openFile"],
    filters: [{ name: "Excel Files", extensions: ["xlsx"] }],
  });

  if (!filePaths || filePaths.length === 0) return;
  const filePath = filePaths[0];
  const { dir, name, ext } = path.parse(filePath);

  const sourceFilePath = path.join(filePath);
  const destFilePath = path.join(dir, "수정본__" + name + ext);

  fs.copyFileSync(sourceFilePath, destFilePath);

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath, { encoding: "utf-8" });
  const worksheet = workbook.getWorksheet("월간점검DC체크리스트");

  const targetRowNumbers = [
    ...getRangeArray(9, 15),
    ...getRangeArray(49, 55),
    ...getRangeArray(89, 95),
    ...getRangeArray(129, 135),
    ...getRangeArray(169, 175),
    ...getRangeArray(209, 215),
    ...getRangeArray(249, 255),
    ...getRangeArray(249, 255),
    ...getRangeArray(289, 295),
    ...getRangeArray(329, 335),
    ...getRangeArray(369, 372),
  ];

  targetRowNumbers.forEach((rowNumber) => {
    const j = worksheet.getCell("J" + rowNumber);
    j.value = Math.round(getRandomValue(vBase, vOffset));

    const k = worksheet.getCell("K" + rowNumber);
    k.value = Math.round(getRandomValue(iBase, iOffset) * 10) / 10;
  });

  await workbook.xlsx.writeFile(destFilePath);
});
