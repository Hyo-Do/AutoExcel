import { dialog } from 'electron';

export function openFile() {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: '엑셀 파일', extensions: ['xlsx', 'csv'] },
            { name: '모든 파일', extensions: ['*'] }
        ]
    }).then(result => {
        if (!result.canceled) {
            const filePath = result.filePaths[0];
            excelProcessing(filePath);
        }
    }).catch(err => {
        console.error('파일 선택 오류:', err);
    });
}


function excelProcessing(filePath: string) {
    console.log(filePath);
}