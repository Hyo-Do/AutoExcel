"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var XlsxPopulate = require("xlsx-populate");
var getRandomValue = function (min, max, interval) {
    var randomFloat = Math.random() * (max - min) + min;
    var adjustedMin = Math.ceil(min / interval) * interval;
    var randomValue = Math.max(adjustedMin, Math.round(randomFloat / interval) * interval);
    return randomValue;
};
var editExcel = function (mainWindow, data) {
    var newFilePath = data.path.replace(".xlsx", "_편집본.xlsx");
    var cols = [
        ["C", "D"],
        ["G", "H"],
        ["K", "L"],
        ["O", "P"],
        ["S", "T"],
        ["W", "X"],
    ];
    XlsxPopulate.fromFileAsync(data.path).then(function (workbook) { return __awaiter(void 0, void 0, void 0, function () {
        var sheet, rows, activeRow, activeCol, cnt, _a, _b, _c, _i, i, j, rowNum, j, v, a, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 11, , 12]);
                    sheet = workbook.sheet("접속반 점검일지");
                    rows = sheet.usedRange().value();
                    activeRow = false;
                    activeCol = 0;
                    cnt = 0;
                    _a = rows;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 9];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 8];
                    i = _c;
                    if (!(rows[i][1] === "Array")) return [3 /*break*/, 2];
                    activeRow = true;
                    for (j = 2; j < rows[i].length; j += 4) {
                        if (rows[i][j] === "전압" && rows[i][j + 1] === "전류")
                            activeCol++;
                        else
                            break;
                    }
                    return [3 /*break*/, 8];
                case 2:
                    if (!activeRow) return [3 /*break*/, 8];
                    if (!!rows[i][1]) return [3 /*break*/, 3];
                    activeRow = false;
                    activeCol = 0;
                    return [3 /*break*/, 8];
                case 3:
                    rowNum = parseInt(i) + 1;
                    j = 0;
                    _d.label = 4;
                case 4:
                    if (!(j < activeCol)) return [3 /*break*/, 8];
                    v = getRandomValue(data.data[2], data.data[3], 1);
                    a = getRandomValue(data.data[0], data.data[1], 0.1);
                    return [4 /*yield*/, sheet.cell("".concat(cols[j][0]).concat(rowNum)).value(v)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, sheet.cell("".concat(cols[j][1]).concat(rowNum)).value(a)];
                case 6:
                    _d.sent();
                    cnt += 2;
                    _d.label = 7;
                case 7:
                    j++;
                    return [3 /*break*/, 4];
                case 8:
                    _i++;
                    return [3 /*break*/, 1];
                case 9: return [4 /*yield*/, workbook.toFileAsync(newFilePath)];
                case 10:
                    _d.sent();
                    mainWindow.webContents.send("edit-excel-end", { cnt: cnt });
                    return [3 /*break*/, 12];
                case 11:
                    error_1 = _d.sent();
                    console.error("Error editing Excel:", error_1);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    }); });
};
exports.default = editExcel;
