"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const node_fs_1 = require("node:fs");
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
            .map(this.mapRow);
    }
    ;
}
exports.CsvFileReader = CsvFileReader;
