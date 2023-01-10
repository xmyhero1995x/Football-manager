import { readFileSync } from 'node:fs';
import { dateStringToDate } from "./helpers";
import { MatchResult } from "./matchResult";


export class CsvFileReader {
    data: string[][] = [];

    constructor(public fileName: string) { };

    read(): void {
        this.data = readFileSync(this.fileName, {
            encoding: "utf-8"
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map((row: string[]): any => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            })
    };
}

