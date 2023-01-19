import { readFileSync } from 'node:fs';
import { MatchResult } from "../matchResult";



export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) { };

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = readFileSync(this.fileName, {
            encoding: "utf-8"
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow)
    };
}