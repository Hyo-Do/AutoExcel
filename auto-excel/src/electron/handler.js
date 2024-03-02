"use strict";
exports.__esModule = true;
exports.openFile = void 0;
var electron_1 = require("electron");
function openFile() {
    electron_1.dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: '엑셀 파일', extensions: ['xlsx', 'csv'] },
            { name: '모든 파일', extensions: ['*'] }
        ]
    }).then(function (result) {
        if (!result.canceled) {
            var filePath = result.filePaths[0];
            excelProcessing(filePath);
        }
    })["catch"](function (err) {
        console.error('파일 선택 오류:', err);
    });
}
exports.openFile = openFile;
function excelProcessing(filePath) {
    console.log(filePath);
}
