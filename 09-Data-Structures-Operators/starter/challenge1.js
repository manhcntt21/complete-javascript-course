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
// 1
const [players1, players2] = game.players;
// 2
const [gk, ...fieldPlayers] = players1;
// 3
allPlayers = [...players1, ...players2];
// 4
players1Final = ['Thiago', 'Countinho', 'Perisic', ...players1];
// 5
const { team1, draw, team2 } = game.odds;
// 6
// rest operator
function printGoals(...players) {
  console.log(`${players}`);
  console.log(`${players.length} goals were scored`);
}
// spread operator
printGoals(...game.scored);
// 7 short curcuiting
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
