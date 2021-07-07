"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require(".//MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var winsAnalysis = new WinsAnalysis_1.WinsAnalysis('Man United');
console.log(winsAnalysis.run(matchReader.matches));
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interfaces
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++;
//     }
// }
// console.log(`Man united won ${manUnitedWins} games`)
