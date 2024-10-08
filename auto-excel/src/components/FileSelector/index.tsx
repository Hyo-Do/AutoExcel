import { useEffect, useState } from "react";
import { Btn, DropArea, DropAreaHint, DropZone } from "./styles";

interface FileSelectorProps {
  setFilePath: React.Dispatch<React.SetStateAction<string>>;
}

const FileSelector = ({ setFilePath }: FileSelectorProps) => {
  const [dragging, setDragging] = useState<boolean>(false);

  const handerDrag = (e: React.DragEvent<HTMLDivElement>, type: "enter" | "leave" | "over") => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "enter") setDragging(true);
    else if (type === "leave") setDragging(false);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => handerDrag(e, "enter");
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => handerDrag(e, "leave");
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => handerDrag(e, "over");
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handerDrag(e, "leave");
    const files = Array.from(e.dataTransfer.files);
    if (files.length < 1) return;
    window.ipc.send("read-excel", files[0].path);
    setFilePath(files[0].path);
  };
  
  useEffect(() => {
    window.ipc.on("open-file-end", (data: any) => {
      window.ipc.send("read-excel", data);
      setFilePath(data);
    });
    return () => window.ipc.offAll("open-file-end");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DropArea $dragging={dragging}>
      <DropZone onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop} />
      <DropAreaHint>이곳에 파일을 드래그하여 첨부할 수 있습니다.</DropAreaHint>
      <Btn $dragging={dragging} onClick={() => window.ipc.send("open-file")}>
        파일 가져오기
      </Btn>
    </DropArea>
  );
};

export default FileSelector;
