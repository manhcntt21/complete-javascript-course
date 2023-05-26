'use-stric';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// task 1
for([key, value] of Object.entries(game.scored)) {
    console.log(`Goal ${key}: ${value}`);
}
// task 2
let average = 0;
const odds = Object.values(game.odds)
for(const odd of odds) average += odd;
console.log(average/odds.length);

// task 3
for([key, value] of Object.entries(game.odds)) {
  console.log(key !== 'x' ? `Odd of victory ${game[key]}: ${value}`: `Odd of draw: ${value}`);
}

for([key, value] of Object.entries(game.odds)) {
  const teamStr = key !== 'x'? `victory ${game[key]}:`: `draw:`;
  console.log(`Odd of ${teamStr} ${value}`);
}

// task 4
const scorers = {};
for(player of game.scored) {
  scorers[player] ? scorers[player]++: scorers[player] = 1;
}
console.log(scorers);