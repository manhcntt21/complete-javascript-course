'use strict';

// score
// selecting elements
const score0El = document.querySelector('#score--0');
// exactly the same
const score1El = document.getElementById('score--1');
// player
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// dice
const diceEl = document.querySelector('.dice');
// button
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// starting condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  // default player 1
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing === true) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  } else {
  }
});

// hold button
btnHold.addEventListener('click', function () {
  if (playing === true) {
    // 1. add current score to active player'score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player'score is >= 100, finish game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      // else, switch the next player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
  } else {
  }
});

// new game
btnNew.addEventListener('click', init);
