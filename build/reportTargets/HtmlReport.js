"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = require("fs");
class HtmlReport {
    print(report) {
        const html = `
        <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        </div>
        `;
        fs_1.readFileSync.writeFileSync('report.html', html);
    }
}
exports.HtmlReport = HtmlReport;
