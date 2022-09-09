// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// debugger;
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // C) FIX
//     value: Number(prompt("Degrees celsius:")),
//     // value: 10,
//   };
//   // B) FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// measureKelvin();

// coding challenge #1
function printForecast(arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}C in ${i + 1} days ...`;
  }

  console.log(str);
}
let temperatures = [17, 21, 23];
printForecast(temperatures);
temperatures = [12, 5, -5, 0, 4];
printForecast(temperatures);
