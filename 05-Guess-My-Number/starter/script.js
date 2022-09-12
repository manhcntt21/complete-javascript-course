'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎈🎈';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// NOTE secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// score
let score = 20;
let highScore = 0;

// update heigt score
function updateHighScore() {
  return highScore < score ? score : highScore;
}

// play again the game
const playAgain = function () {
  initGame();
};

// restore game
function initGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
}

// const playGame = function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // when there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number';
//     // when player win
//   } else if (secretNumber === guess) {
//     highScore = updateHighScore();
//     document.querySelector('.highscore').textContent = highScore;
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     // manipulating css
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     // when guess is too heigh
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '👋🏻 Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lose the game';
//       document.querySelector('.score').textContent = 0;
//     }
//     // when guess is too low
//   } else {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '👇🏻 Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lose the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// };

function displayMessage(messgae) {
  document.querySelector('.message').textContent = messgae;
}

function buttonLock(status) {
  document.querySelector('.check').disabled = status;
}
// dry principle
const playGame = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
    // when player win
  } else if (secretNumber === guess) {
    highScore = updateHighScore();
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    // manipulating css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    buttonLock(true);
    // when guess is wrong
  } else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👋🏻 Too high' : '👇🏻 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lose the game');
      document.querySelector('.score').textContent = 0;
      buttonLock(true);
    }
  }
};

document.querySelector('.check').addEventListener('click', playGame);
document.querySelector('.again').addEventListener('click', playAgain);
