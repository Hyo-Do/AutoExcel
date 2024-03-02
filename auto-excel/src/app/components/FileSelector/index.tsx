import { useState } from "react";
import { Btn, DropArea } from "./styles";

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
    <DropArea
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      $dragging={dragging}
    >
      <Btn onClick={() => window.ipc.send("open-file")}>실행</Btn>
    </DropArea>
  );
};

export default FileSelector;
