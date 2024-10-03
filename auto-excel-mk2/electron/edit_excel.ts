import { BrowserWindow } from "electron";

const XlsxPopulate = require("xlsx-populate");

const getRandomValue = (min: number, max: number, interval: number): number => {
  const randomFloat = Math.random() * (max - min) + min;
  const adjustedMin = Math.ceil(min / interval) * interval;
  const randomValue = Math.max(adjustedMin, Math.round(randomFloat / interval) * interval);

  return randomValue;
};

const editExcel = (mainWindow: BrowserWindow, data: { path: string; data: any }) => {
  const newFilePath = data.path.replace(".xlsx", "_편집본.xlsx");
  const cols: string[][] = [
    ["C", "D"],
    ["G", "H"],
    ["K", "L"],
    ["O", "P"],
    ["S", "T"],
    ["W", "X"],
  ];

  XlsxPopulate.fromFileAsync(data.path).then(async (workbook: any) => {
    try {
      const sheet = workbook.sheet("접속반 점검일지");
      const rows = sheet.usedRange().value();
      let activeRow: boolean = false;
      let activeCol: number = 0;
      let cnt: number = 0;

      for (const i in rows) {
        if (rows[i][1] === "Array") {
          activeRow = true;

          for (let j = 2; j < rows[i].length; j += 4) {
            if (rows[i][j] === "전압" && rows[i][j+1] === "전류") activeCol++;
            else break;
          }
        } else if (activeRow) {
          if (!rows[i][1]) {
            activeRow = false;
            activeCol = 0;
          } else {
            const rowNum = parseInt(i) + 1;

            for (let j = 0; j < activeCol; j++) {
              const v = getRandomValue(data.data[2], data.data[3], 1);
              const a = getRandomValue(data.data[0], data.data[1], 0.1);
              await sheet.cell(`${cols[j][0]}${rowNum}`).value(v);
              await sheet.cell(`${cols[j][1]}${rowNum}`).value(a);
              cnt += 2;
            }
          }
        }
      }

      await workbook.toFileAsync(newFilePath);
      mainWindow.webContents.send("edit-excel-end", { cnt: cnt });
    } catch (error) {
      console.error("Error editing Excel:", error);
    }
  });
};

export default editExcel;
