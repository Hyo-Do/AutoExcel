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
      let sheetIdx: number = 0;
      let cnt: number = 0;
      workbook.sheets().forEach((sheet: any) => {
        let scanRowIdx = 60;
        if (sheet.cell(scanRowIdx, 3).value() !== "□ 접속함 (체널별 전류)") {
          // 표의 시작인덱스가 60이 아닐때 추가 처리
          console.log("[WARNING] 표 시작위치가 예상과 다르게 인식됨!");
        }
        scanRowIdx++;

        // 헤더 총 개수 구하기 (headerCnt)
        let headerCnt = 0;
        let scanColIdx = 9;
        for (let loopCnt = 0; loopCnt < 100; loopCnt++) {
          if (sheet.cell(scanRowIdx, scanColIdx).value() === undefined) break;
          scanColIdx += 2;
          headerCnt++;
        }
        scanRowIdx++;

        for (let loopCnt = 0; loopCnt < 100; loopCnt++) {
          // console.log(sheet.cell(scanRowIdx, 3).value());
          if (sheet.cell(scanRowIdx, 3).value() === undefined) break;
          for (let colIdx = 0; colIdx < headerCnt; colIdx++) {
            const targetValue = sheet.cell(scanRowIdx, 9 + colIdx * 2).value();
            if (targetValue === undefined) continue;
            const newValue = getRandomValue(data.data.values[sheetIdx][0], data.data.values[sheetIdx][1], data.data.deltaA);
            sheet.cell(scanRowIdx, 9 + colIdx * 2).value(newValue);
            cnt++;
          }
          scanRowIdx++;
        }

        sheetIdx++;
      });

      await workbook.toFileAsync(newFilePath);
      mainWindow.webContents.send("edit-excel-end", {
        sheetCnt: sheetIdx,
        rowCnt: 0,
        cellCnt: cnt,
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
