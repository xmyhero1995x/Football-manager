"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTatget) {
        this.analyzer = analyzer;
        this.outputTatget = outputTatget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTatget.print(output);
    }
}
exports.Summary = Summary;
