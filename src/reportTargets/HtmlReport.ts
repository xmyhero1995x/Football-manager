import { OutputTarget } from "../Summary";
import { readFileSync, writeFileSync } from "fs";

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
        <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        </div>
        `;
        writeFileSync('report.html',html)
    }
}