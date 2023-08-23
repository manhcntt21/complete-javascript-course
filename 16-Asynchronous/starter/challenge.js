'use-strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const whereAmI = function (url, lat, lng) {
  fetch(`${url}?lat=${lat}&lon=${lng}&format=json`)
    .then(response => {
      if (!response.ok)
        throw Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(
        `You're in ${data?.address?.city}, ${data?.address?.country}`
      );
      const country = data?.address?.country.toLowerCase();
      if (!country) throw new Error('No country found!');
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(e => console.log(e.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

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
  //   countriesContainer.style.opacity = 1;
};

whereAmI('https://nominatim.openstreetmap.org/reverse', 52.508, 13.381);
whereAmI('https://nominatim.openstreetmap.org/reverse', 19.037, 72.873);
whereAmI('https://nominatim.openstreetmap.org/reverse', -33.933, 18.474);
