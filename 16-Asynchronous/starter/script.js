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
const getCountriesData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data.languages);
    const html = `
            <article class="country">
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
  });
};

// AJAX call => asynchronous
getCountriesData('portugal');
getCountriesData('usa');
getCountriesData('germany');
