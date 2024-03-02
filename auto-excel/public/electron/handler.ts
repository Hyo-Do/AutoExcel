import { BrowserWindow, dialog } from 'electron';

export function openFile(mainWindow: BrowserWindow) {
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: '엑셀 파일', extensions: ['xlsx', 'csv'] },
            { name: '모든 파일', extensions: ['*'] }
        ]
    }).then(result => {
        if (result.canceled || result.filePaths.length < 1) return;
        mainWindow.webContents.send("open-file-end", result.filePaths[0])
    }).catch(err => {
        console.error('파일 선택 오류:', err);
    });
}
