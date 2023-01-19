"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const winsAnalysis_1 = require("./analyzers/winsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an object of matchReader and pass DataReader implementation
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = new Summary_1.Summary(new winsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
