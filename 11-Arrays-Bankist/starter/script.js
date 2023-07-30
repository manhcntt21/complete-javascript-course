'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

// 151
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);
// console.log(accounts.forEach(value => console.log(value.username)));

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(account1.movements);

const calcDiplaySummary = function (account) {
  const totalDeposits = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  const totalWithdrawals = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + Math.abs(cur), 0);

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${totalDeposits}€`;
  labelSumOut.textContent = `${totalWithdrawals}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);

  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDiplaySummary(acc);
};
// calcDiplaySummary(account1.movements);

// Event listener
let currenAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form submitting
  e.preventDefault();
  currenAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currenAccount);

  if (currenAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${currenAccount.owner}`;
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currenAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  console.log(amount, receiveAcc);

  if (
    amount > 0 &&
    receiveAcc &&
    currenAccount.balance >= amount &&
    receiveAcc?.username !== currenAccount.username
  ) {
    // doing transfer
    currenAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    updateUI(currenAccount);
  }

  // clean input field
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currenAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currenAccount.movements.push(amount);
    // update UI
    updateUI(currenAccount);

    // clear input field
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // clean input field
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    currenAccount.username === inputCloseUsername?.value &&
    currenAccount.pin === Number(inputClosePin?.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );
    accounts.splice(index, 1);

    // logout

    // hide ui
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
});
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currenAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 142
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(1));
// console.log(arr.slice(1, 2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// // create a shallow copy
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);

// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));
// console.log(letters);

//// at method
// 143
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// console.log('jonas'.at(0));
//// looping arrays: forEach
// // 144

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // traditional method for
// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`You deposited ${movement}`);
// //   } else {
// //     console.log(`You withdrew ${Math.abs(movement)}`);
// //   }
// // }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// // forEach
// console.log('--- FOREACH ---');

// // movements.forEach(function (movement) {
// //   if (movement > 0) {
// //     console.log(`You deposited ${movement}`);
// //   } else {
// //     console.log(`You withdrew ${Math.abs(movement)}`);
// //   }
// // });

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// forEach with maps and sets
// 145
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

//// data transformations: map, filter, reduce
// 150, map
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov, i, arr) {
//   return mov * eurToUsd;
// });

// const movementsUSDAnonymous = movements.map(mov => mov * eurToUsd);

// // const movementDescription = movements.map((mov, i) => {
// //   if (mov > 0) {
// //     return `Movement ${i + 1}: You deposited ${mov}`;
// //   } else {
// //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// //   }
// // });

// const movementDescription = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}  ${mov}`;
// });

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDAnonymous);
// console.log(movementDescription);

// 152: filter
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposits);
// console.log(withdrawals);
// console.log(movements);

// 153: reduce
// console.log(movements);

// // accumulator -> SNOWBALL
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i} : ${acc}`);
// //   return acc + cur;
// // }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// // maximum value
// const maxValue = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(maxValue);

// // 155
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// // 157 find method
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// 160 findIndex method
// 161 SOME AND EVERY

// console.log(movements);
// //equality
// console.log(movements.includes(-130));

// // condition
// console.log(movements.some(mov => mov == -130));

// const anyDeposit = movements.some(mov => mov > -1500);

// console.log(anyDeposit);

// // every
// console.log(account4.movements.every(mov => mov > 0));

// // separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// 162 flat, flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat());
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatmap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

//163 sort
// // string
// const owners = ['Jonas', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // numbers
// console.log(movements);
// // console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

// // fix
// // return < 0, a, b (keep order)
// // retunr > 0, b, a (switch order)
// console.log(movements.sort((a, b) => (a > b ? 1 : -1)));

// 164

console.log([1, 2, 3, 4, 5, 6]);
const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 4, 5, 6));

// empty array with fill
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

// x.fill(1);
// x.fill(1, 3);
x.fill(1, 3, 5);

console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// array.from
const y = Array.from({ length: 7 }, () => 1);
const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(y);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI);
  console.log(movementsUI2);
});

// 166 Array Methods Practice
const depositedSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((mov, cur) => cur + mov, 0);

const numberDeposited1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

const numberDeposited1000_2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur > 1000 ? count + 1 : count), 0);

console.log(numberDeposited1000);
console.log(numberDeposited1000_2);

// calc sum deposits, withdrawal on all account
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  return title
    .toLowerCase()
    .split(' ')
    .map(word => (!exceptions.includes(word) ? capitalize(word) : word))
    .join(' ');
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
