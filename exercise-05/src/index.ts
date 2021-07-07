import { MatchReader } from './/MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
// Create an object that satisfies the 'DataReader' interface

const csvFileReader = new CsvFileReader('./football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const winsAnalysis = new WinsAnalysis('Man United');

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