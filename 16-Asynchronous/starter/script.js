'use strict';

// phan tich vi du
// const p = document.querySelector('p');
// setTimeout(function () {
//   p.textContent = 'My name is Jonas';
// }, 5000);
// p.style.color = 'red';
/*
    callback function chay sau khi ham timer chay trong background ket thuc => asynchronous
*/

///////////////////////////////////////
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders?.[0];
//       const neighbour = 'asdasd';

//       if (!neighbour) return;

//       // country 2
//       // return promises, vi then can return promises
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(e);
//       renderError(`Something went wrong: ${e.message}, try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// toi uu code tren
const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //   console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      // return promises, vi then can return promises
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(e => {
      console.error(e);
      renderError(`Something went wrong: ${e.message}, try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// // old school way of AJAX call - XMLHttpRequest
const renderCountry = function (data, className = '') {
  const html = `
            <article class="country ${className}">
              <img class="country__img" src="${data.flags.svg}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${
                  Object.values(data.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                  Object.values(data.currencies)[0].name
                }</p>
              </div>
            </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // get neighbour country
//     const [neighbour] = data.borders;
//     // console.log(neighbour);

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // AJAX call => asynchronous
// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// // getCountryAndNeighbour('germany');

// setTimeout(() => {
//   console.log('1 second passed!');
//   setTimeout(() => {
//     console.log('2 second passed!');
//     setTimeout(() => {
//       console.log('3 second passed!');
//       setTimeout(() => {
//         console.log('4 second passed!');
//       }, 100);
//     }, 100);
//   }, 100);
// }, 100);

///////////////////////////////////////
// Promises and the Fetch API
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// promises
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// setTimeout(() => {
//   console.log(request);
// }, 3000);

// consume promises

// function declaration
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// arrow function
// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => response.json()
//       //   ,err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // country 2
//       // return promises, vi then can return promises
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       response => response.json()
//       //   ,err => alert(err)
//     )
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.log(e);
//     });
// };

/*
cach nay van work, nhung nen trach, vi no su dung nested callback function
*/
// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // country 2
//       // return promises, vi then can return promises
//       fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(
//         response => response.json()
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'));
// };

btn.addEventListener('click', function (e) {
  getCountryData('portugal');
});

// getCountryData('australia');

/////////////////////////////////////////////
// Event loop in practive

// // synchronous
// console.log('Test start'); // 1 global execution context

// // sau 0s, callback function duoc dua vao callback queue
// setTimeout(() => console.log('0 sec timer'), 0); // 3 callback queue

// // promises resolve - fulfilled
// Promise.resolve('Resolve promises 1').then(res => console.log(res)); // 2 microtasks queue

// Promise.resolve('Resolve promises 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });
// // synchronous
// console.log('Test end'); // 1 global execution context

////////////////////////////////////////////////
// building a simple promiese
// // new promise using promise constructor
// // asynchronous behavior
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   // dung timer encapsulate any asynchronous behavior into a promise
//   // de mo phong asynchronous operation
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       // fulfilled promise
//       resolve('You win!');
//     } else {
//       // rejected promise
//       reject(new Error('You lost your money!'));
//     }
//   }, 2000);
// });

// // consuming promise
// lotteryPromise.then(res => console.log(res)).catch(e => console.error(e));

// // promisifing setTimeout:
// // warp old callback based function into promise
// const wait = function (seconds) {
//   // chi can 1 tham so vi setTimeout khong bao gio fail
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// // consum
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(4);
//   })
//   .then(() => {
//     console.log('4 second passed');
//     return wait(5);
//   });

// // static method on promise constructor
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

////////////////////////////////////////
// Promisifying the Geolocation API

// console.log('Getting position!');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => new Error(err));

////////////////////////////////////////
// // Consuming Promises with Async/Await
// console.log('Getting position!');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => new Error(err));

// const whereAmI = async function () {
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;
//   // reverse geocoding
//   const resGeo = await fetch(
//     `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//   );
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);
//   // country
//   // no se doi cho den khi promise o trang thai fulfilled
//   const res = await fetch(
//     `https://restcountries.com/v3.1/name/${dataGeo?.address?.country.toLowerCase()}`
//   );

//   const data = await res.json();

//   console.log(data[0]);
//   renderCountry(data[0]);
// };
// whereAmI();
// console.log('FIRST');

////////////////////////////////////////
// error handling with try/catch
// let y = 1;
// const x = 2;
// x = 3;

// try {
//   let y = 1;
//   const x = 2;
//   // x = 3;
//   y = 3;
// } catch (error) {
//   alert(error.message);
// }
////
// try {
//   const whereAmI = async function () {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // reverse geocoding
//     const resGeo = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//     );
//     if (!resGeo.ok) throw Error(`Problem with geocoding ${resGeo.status}`);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     // country
//     // no se doi cho den khi promise o trang thai fulfilled
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo?.address?.country.toLowerCase()}`
//     );
//     if (!res.ok) throw Error(`Problem with geocoding ${res.status}`);
//     const data = await res.json();
//     console.log(data[0]);
//     renderCountry(data[0]);
//   };
// } catch (error) {
//   console.error(error);
//   renderError(`Something went wrong`);
// }

////////////////////////////////////////
// return value from async function
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!resGeo.ok) throw Error(`Problem with geocoding ${resGeo.status}`);
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    // country
    // no se doi cho den khi promise o trang thai fulfilled
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.address?.country?.toLowerCase()}`
    );
    if (!res.ok) throw Error(`Problem with geocoding ${res.status}`);
    const data = await res.json();
    // console.log(data[0]);
    renderCountry(data[0]);
    return `You're in ${dataGeo?.address?.city}, ${dataGeo?.address?.country}`;
  } catch (error) {
    console.error(error);
    renderError(`Something went wrong`);

    // reject promise returned from async function
    //
    throw error;
  }
};

// mixed giua viec su dung old va new voi promise
console.log('1: Will get location!');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(error => console.error(`2: ${error.message}`))
//   .finally(() => {
//     console.log('3: Finished getting location!');
//   });

// chi su dung new promise, su them them iife: immediately-invoked function expression
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (error) {
    console.error(`2: ${error.message}`);
  }
  console.log('3: Finished getting location!');
})();

/////////////////////////////////////
// running promises parallel
const getThreeCountries = async function (c1, c2, c3) {
  try {
    // 3 ajax call khong phu thuoc vao nhau
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // const [data] = data1.capital;
    // console.log(data);
    // console.log(data1.capital, data2.capital, data3.capital);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

getThreeCountries('portugal', 'vietnam', 'germany');
