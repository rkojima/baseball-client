const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('./baseball_stats/mlb_legends_leaderboard.csv', 'utf8');
//2016_season.csv
//FanGraphs_Leaderboard.csv

const records = parse(data, {columns: true, auto_parse: true}).map(function(record){
    return {
        name: record.Name,
        winsAboveReplacement: record.WAR,        
        hits: record.H,
        runsBattedIn: record.RBI,
        avg: record.AVG,
        onBasePercentage: record.OBP,
        isolatedPower: record.ISO,
        battingAverageOnBallsInPlay: record.BABIP,
        weightedOnBaseAverage: record.wOBA,
        weightedRunsCreatedPlus: record["wRC+"], 
        baseRunning: record.BsR
    }
});

fs.writeFileSync('./baseball_stats/testWrite.json', JSON.stringify(records));

// console.log(records);