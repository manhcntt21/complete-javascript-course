'use-strict';
const poll = {
    answers: new Array(4).fill(0),
    question: 'What is your favourite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    registerNewAnswer: function () {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join(
                    '\n'
                )}\n(Write option number)`
            )
        );
        typeof answer === 'number' &&
            answer < this.answers.length &&
            this.answers[answer]++;
        // this.displayResult('string');
    },
    displayResult: function (type = 'array') {
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else if (type === 'array') {
            console.log(this.answers);
        }
    },
};

// poll.registerNewAnswer();
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
console.log(poll);

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [5, 2, 3] }, 'array');

// 137 closures
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
// 138 more closure example
// example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(2 * a);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(2 * b);
    };
};
g();
f();
console.dir(f);
// re-assigning f function
h();
f();
console.dir(f);
// example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are new boaring all ${n} passengers`);

        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
// setTimeout(function () {
//     console.log('TIMER');
// }, 1000);
console.dir(boardPassengers);
const perGroup = 1000;
boardPassengers(180, 3);
