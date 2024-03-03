import { BrowserWindow } from "electron";

const getRandomValue = (min: number, max: number, interval: number): number => {
  const randomFloat = Math.random() * (max - min) + min;
  const adjustedMin = Math.ceil(min / interval) * interval;
  const randomValue = Math.max(adjustedMin, Math.round(randomFloat / interval) * interval);

  return randomValue;
};

const XlsxPopulate = require("xlsx-populate");

const editExcelNewMode = (mainWindow: BrowserWindow, data: { path: string; data: any; mode: number }) => {
  const newFilePath = data.path.replace(".xlsx", "_편집본.xlsx");
  XlsxPopulate.fromFileAsync(data.path).then(async (workbook: any) => {
    try {
      const sheet = workbook.sheet("월간점검DC체크리스트");
      const rows = sheet.usedRange().value();
      let active: boolean = false;
      let cnt: number = 0;
      for (const i in rows) {
        if (rows[i][9] === "전압" && rows[i][10] === "전류" && rows[i][11] === "이상유무") {
          active = true;
          continue;
        }
        if (active) {
          if (!rows[i][9]) {
            active = false;
          } else {
            const num = parseInt(i) + 1;
            await sheet.cell(`J${num}`).value(getRandomValue(data.data.minV, data.data.maxV, data.data.deltaV));
            await sheet.cell(`K${num}`).value(getRandomValue(data.data.minA, data.data.maxA, data.data.deltaA));
            cnt++;
          }
        }
      }

      await workbook.toFileAsync(newFilePath);
      mainWindow.webContents.send("edit-excel-end", {
        sheetCnt: 1,
        rowCnt: cnt,
        cellCnt: cnt * 2,
      });
    } catch (error) {
      console.error("Error editing Excel:", error);
    }
  });
};

const editExcelOldMode = (mainWindow: BrowserWindow, data: { path: string; data: any; mode: number }) => {
  const newFilePath = data.path.replace(".xlsx", "_편집본.xlsx");
  XlsxPopulate.fromFileAsync(data.path).then(async (workbook: any) => {
    try {
      console.log(data.data);
      let sheetCnt: number = 0;
      let cnt: number = 0;
      workbook.sheets().forEach((sheet: any) => {
        console.log("Sheet Name:", sheet.name());
        sheetCnt++;
      });

      await workbook.toFileAsync(newFilePath);
      mainWindow.webContents.send("edit-excel-end", {
        sheetCnt: sheetCnt,
        rowCnt: "-",
        cellCnt: cnt * 2,
      });
      // showSuccessPopup(mainWindow, cnt);
    } catch (error) {
      console.error("Error editing Excel:", error);
    }
  });
};

const editExcel = async (mainWindow: BrowserWindow, data: { path: string; data: any; mode: number }) => {
  if (data.mode === 0) editExcelNewMode(mainWindow, data);
  else if (data.mode === 1) editExcelOldMode(mainWindow, data);
};

export default editExcel;
