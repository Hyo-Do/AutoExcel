import { useEffect } from "react";

const StatusBar = () => {
  useEffect(() => {
    window.ipc.on("edit-excel-end", (data: any) => {
      alert(`엑셀 작업이 정상적으로 완료되었습니다.\n변환한 행 합계 : ${data} (개)`);
    });
    return () => window.ipc.offAll("edit-excel-end");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default StatusBar;
