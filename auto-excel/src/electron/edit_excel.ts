import { BrowserWindow } from "electron";
import { InputData } from "../app/interfaces/inputData";

const XlsxPopulate = require("xlsx-populate");

const editExcel = async (mainWindow: BrowserWindow, data: { path: string; data: InputData }) => {
  const newFilePath = data.path.replace(".xlsx", "_편집본.xlsx");
  XlsxPopulate.fromFileAsync(data.path).then((workbook: any) => {
    // workbook.sheet("월간점검DC체크리스트").cell("J9").value("허허낙낙");
    // const value = workbook.sheet("월간점검DC체크리스트").cell("J9").value();

    console.log(data);

    return workbook.toFileAsync(newFilePath);
  });
};

export default editExcel;
