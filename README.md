# AutoExcel - 엑셀 자동화

<div style="display: flex;">
  <figure>
    <img width=300 src="https://github.com/Hyo-Do/AutoExcel/assets/48408417/dbba0772-1d53-44af-be3b-7a5cb0e70972"/>
    <figcaption>v1 (auto-excel)</figcaption>
  </figure> 
  <figure>
    <img width=300 src="https://github.com/user-attachments/assets/32b4e4fd-9fe6-48f7-b9b1-3fc9f4b8b899"/>
    <figcaption>v2 (auto-excel-mk2)</figcaption>
  </figure>
</div>

엑셀의 반복되는 작업들을 자동화하는 프로그램을 개발

## Trouble Shooting

- 엑셀의 도형,이미지,체크박스 등이 포함된 파일을 손실없이 편집하는 니즈

#### 방법 1. **xlsx** : 엑셀의 스타일도 손실됨, 정말 스타일없는 엑셀을 다룰때 사용하는 용도의 라이브러리

```ts
import * as XLSX from "xlsx";

const editExcel = (filePath: string) => {
  const newFilePath = filePath.replace(".xlsx", "_편집본.xlsx");
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[3]];
  // read cell
  const cellValue = sheet["J9"].v;
  console.log(cellValue);
  // write cell
  sheet["J9"].v = "새값이여";
  // save file
  XLSX.writeFile(workbook, newFilePath);
};
```

#### 방법 2. **exceljs** : 엑셀의 스타일, 이미지도 유지되지만 도형이나 체크박스같은 특수한 객체는 손실됨

```ts
import * as ExcelJS from "exceljs";

const editExcel = async (mainWindow: BrowserWindow, filePath: string) => {
  const newFilePath = filePath.replace(".xlsx", "_편집본.xlsx");
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[3];

  worksheet.eachRow((row, rowNumber) => {
    // write cell
    const cell = row.getCell(9);
    if (rowNumber === 9) cell.value = "새값임";
  });
  // save file
  workbook.xlsx.writeFile(newFilePath);
};
```

#### 방법 3. **xlsx-populate** : (해결) 도형이나 체크박스 같은 특수한 객체까지 손실없이 편집 가능

```ts
const XlsxPopulate = require("xlsx-populate");

const editExcel = async (mainWindow: BrowserWindow, filePath: string) => {
  const newFilePath = filePath.replace(".xlsx", "_편집본.xlsx");
  XlsxPopulate.fromFileAsync(filePath).then((workbook: any) => {
    // read cell
    workbook.sheet("월간점검DC체크리스트").cell("J9").value("새값인디");
    // write cell
    const value = workbook.sheet("월간점검DC체크리스트").cell("J9").value();
    console.log(value);

    return workbook.toFileAsync(newFilePath);
  });
};
```
