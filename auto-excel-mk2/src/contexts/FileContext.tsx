import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const FileContext = createContext<any>(null);

export const FileProvider: React.FC<Props> = ({ children }) => {
  const [filePath, setFilePath] = useState<string>("");
  const [dataList, setDataList] = useState([0.9, 1.1, 705, 706]);
  const updateDataList = (index: number, value: any) => setDataList((lst: any[]) => lst.map((e, i) => (i === index ? value : e)));

  return <FileContext.Provider value={{ filePath, setFilePath, dataList, setDataList, updateDataList }}>{children}</FileContext.Provider>;
};
