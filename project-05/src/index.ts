import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');
const anotherSummary = Summary.winsAnalysisWithConsoleReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
anotherSummary.buildAndPrintReport(matchReader.matches);


