import { BrowserWindow } from "electron";

const XlsxPopulate = require("xlsx-populate");

export function readExcel(mainWindow: BrowserWindow, filePath: string) {
  XlsxPopulate.fromFileAsync(filePath).then(async (workbook: any) => {
    const sheets = workbook.sheets();
    const sheetNames: string[] = sheets.map((sheet: any) => sheet.name());

    if (!sheetNames.includes("접속반 점검일지")) {
      return mainWindow.webContents.send("read-excel-end", {
        isOk: false,
        data: "타겟으로하는 엑셀 시트가 없음",
      });
    }

    try {
      const sheet = workbook.sheet("접속반 점검일지");
      const rows = sheet.usedRange().value();
      const data = {
        v: rows[7][2],
        a: rows[7][3],
      };

      mainWindow.webContents.send("read-excel-end", {
        isOk: true,
        data: data,
      });
    } catch (error) {
      mainWindow.webContents.send("read-excel-end", {
        isOk: false,
        data: error,
      });
    }
  });
}
