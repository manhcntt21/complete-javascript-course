'use-strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// task 1
const events = [...new Set([...gameEvents.values()])];
console.log(events);

// task 2
gameEvents.delete(64);
console.log(gameEvents);

// task 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// task 4
for ([min, eventt] of gameEvents) {
  const half = min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${min}: ${eventt}`);
}
