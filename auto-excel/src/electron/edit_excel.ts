import { BrowserWindow } from "electron";

const XlsxPopulate = require("xlsx-populate");

const editExcel = async (mainWindow: BrowserWindow, filePath: string) => {
  const newFilePath = filePath.replace(".xlsx", "_편집본.xlsx");
  XlsxPopulate.fromFileAsync(filePath).then((workbook: any) => {
    // Modify the workbook.
    workbook.sheet("월간점검DC체크리스트").cell("J9").value("허허낙낙");
    const value = workbook.sheet("월간점검DC체크리스트").cell("J9").value();

    // Log the value.
    console.log(value);

    return workbook.toFileAsync(newFilePath);
  });
};

export default editExcel;
