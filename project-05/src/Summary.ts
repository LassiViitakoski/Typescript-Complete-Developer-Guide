import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(teamName: string, fileName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport(fileName)
        );
    }

    static winsAnalysisWithConsoleReport(teamName: string) {
        return new Summary(
            new WinsAnalysis(teamName),
            new ConsoleReport()
        )
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

