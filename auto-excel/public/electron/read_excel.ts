import { BrowserWindow } from "electron";

const XlsxPopulate = require("xlsx-populate");

export function readExcel(mainWindow: BrowserWindow, filePath: string) {
  XlsxPopulate.fromFileAsync(filePath).then(async (workbook: any) => {
    const sheets = workbook.sheets();
    const sheetValues: number[] = [];
    const sheetNames: string[] = sheets.map((sheet: any) => sheet.name());
    const mode = sheetNames.includes("월간점검DC체크리스트") ? 0 : 1;

    if (mode === 0) {
      // * 전압&전류 모드 (mode:0)
      const sheet = workbook.sheet("월간점검DC체크리스트");
      const rows = sheet.usedRange().value();
      for (const i in rows) {
        if (rows[i][9] === "전압" && rows[i][10] === "전류" && rows[i][11] === "이상유무") {
          sheetValues.push(parseFloat(rows[parseInt(i) + 1][9].toFixed(1)));
          sheetValues.push(parseFloat(rows[parseInt(i) + 1][10].toFixed(1)));
          break;
        }
      }
    } else if (mode === 1) {
      // * 전류 모드 (mode:1)
      sheets.forEach((sheet: any) => {
        if (sheet.cell("C60").value() === "□ 접속함 (체널별 전류)") {
          sheetValues.push(parseFloat(sheet.cell("I62").value().toFixed(1)));
        }
      });
    }

    try {
      mainWindow.webContents.send("read-excel-end", {
        mode: mode,
        sheetNames: sheetNames,
        sheetValues: sheetValues,
      });
    } catch (error) {
      console.error("Error editing Excel:", error);
    }
  });
}
