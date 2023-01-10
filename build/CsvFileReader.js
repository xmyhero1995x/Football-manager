"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const node_fs_1 = require("node:fs");
const helpers_1 = require("./helpers");
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    ;
    read() {
        this.data = (0, node_fs_1.readFileSync)(this.fileName, {
            encoding: "utf-8"
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            return [
                (0, helpers_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
    ;
}
exports.CsvFileReader = CsvFileReader;
