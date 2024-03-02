import { BrowserWindow } from "electron";
import { InputData } from "../../src/interfaces/inputData";

const getRandomValue = (min: number, max: number, interval: number): number => {
  const randomFloat = Math.random() * (max - min) + min;
  const adjustedMin = Math.ceil(min / interval) * interval;
  const randomValue = Math.max(adjustedMin, Math.round(randomFloat / interval) * interval);

  return randomValue;
};

// const showSuccessPopup = (mainWindow: BrowserWindow, cnt: number) => {
//   const { x, y, width, height } = mainWindow.getBounds();
//   const alertX = x + width / 2;
//   const alertY = y + height / 2;

//   dialog.showMessageBox(mainWindow, {
//     type: "info",
//     title: "자동 편집 완료",
//     message: `정상적으로 엑셀 편집을 완료했습니다.\n수정한 행 합계 : ${cnt} (개)`,
//     buttons: ["확인"],
//     x: alertX,
//     y: alertY,
//   });
// };

const XlsxPopulate = require("xlsx-populate");

const editExcel = async (mainWindow: BrowserWindow, data: { path: string; data: InputData }) => {
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
      mainWindow.webContents.send("edit-excel-end", cnt);
      // showSuccessPopup(mainWindow, cnt);
    } catch (error) {
      console.error("Error editing Excel:", error);
    }
  });
};

export default editExcel;
