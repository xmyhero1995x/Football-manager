import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/winsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";


// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an object of matchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
