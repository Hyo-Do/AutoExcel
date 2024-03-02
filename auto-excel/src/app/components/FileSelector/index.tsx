import { useState } from "react";
import { Btn, DropArea, DropAreaHint, DropZone } from "./styles";

const FileSelector = () => {
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
    console.log(files);
  };

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
