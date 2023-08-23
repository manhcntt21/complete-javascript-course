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

///////////////////////////////////////

// old school way of AJAX call - XMLHttpRequest
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
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // get neighbour country
    const [neighbour] = data.borders;
    // console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// AJAX call => asynchronous
// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');

setTimeout(() => {
  console.log('1 second passed!');
  setTimeout(() => {
    console.log('2 second passed!');
    setTimeout(() => {
      console.log('3 second passed!');
      setTimeout(() => {
        console.log('4 second passed!');
      }, 100);
    }, 100);
  }, 100);
}, 100);
