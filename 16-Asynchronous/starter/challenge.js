'use-strict';
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const whereAmI = function (url, lat, lng) {
//   fetch(`${url}?lat=${lat}&lon=${lng}&format=json`)
//     .then(response => {
//       if (!response.ok)
//         throw Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(
//         `You're in ${data?.address?.city}, ${data?.address?.country}`
//       );
//       const country = data?.address?.country.toLowerCase();
//       if (!country) throw new Error('No country found!');
//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(e => console.log(e.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const renderCountry = function (data, className = '') {
//   const html = `
//             <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${data.population}</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   Object.values(data.languages)[0]
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   Object.values(data.currencies)[0].name
//                 }</p>
//               </div>
//             </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   //   countriesContainer.style.opacity = 1;
// };

// whereAmI('https://nominatim.openstreetmap.org/reverse', 52.508, 13.381);
// whereAmI('https://nominatim.openstreetmap.org/reverse', 19.037, 72.873);
// whereAmI('https://nominatim.openstreetmap.org/reverse', -33.933, 18.474);

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function (url) {
  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`${url}?lat=${lat}&lon=${lng}&format=json`);
    })
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

whereAmI('https://nominatim.openstreetmap.org/reverse');
*/

// challenge #2
/**
 * fix my first solution
 */
// const imgContainer = document.querySelector('.images');
// let curImg;
// const createImage = function (src) {
//   return new Promise(function (resolve, reject) {
//     const imgEl = document.createElement('img');
//     imgEl.src = src;
//     if (imgEl.src) return resolve(imgEl);
//     return reject(new Error('fail upload'));
//   });
// };

// const wait = function (seconds) {
//   // chi can 1 tham so vi setTimeout khong bao gio fail
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// createImage('./img/img-1.jpg')
//   .then(img => {
//     curImg = img;
//     imgContainer.insertAdjacentElement('beforeend', img);
//     return wait(2);
//   })
//   .then(() => {
//     curImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     curImg = img;
//     imgContainer.insertAdjacentElement('beforeend', img);
//     return wait(2);
//   })
//   .then(() => {
//     curImg.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .then(img => {
//     imgContainer.insertAdjacentElement('beforeend', img);
//   })
//   .catch(e => console.error(e));

/**
 *
 * loi giai khi tham giao solution */

const imgContainer = document.querySelector('.images');

const createImage = function (src) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    if (imgEl.src !== '') {
      imgContainer.append(imgEl);
      return resolve(imgEl);
    }
    return reject(new Error('fail upload'));
  });
};

// const wait = function (seconds) {
//   // chi can 1 tham so vi setTimeout khong bao gio fail
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImg;
// createImage('./img/img-1.jpg')
//   .then(img => {
//     console.log('image 1 loaded');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     console.log('image 2 loaded');
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     console.log('image 3 loaded');
//     currentImg.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .catch(e => console.error(e));

// challenge #3
// part 1
const wait = function (seconds) {
  // chi can 1 tham so vi setTimeout khong bao gio fail
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function (image1, image2, image3) {
  try {
    let img = await createImage(image1);
    await wait(3);
    img.style.display = 'none';
    img = await createImage(image2);
    await wait(3);
    img.style.display = 'none';
    await createImage(image3);
  } catch (error) {
    throw error;
  }
};

// loadNPause('./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg')
//   .then(res => console.log(res))
//   .catch(e => console.error(e));

// part 2
const loadAll = async function (arr) {
  try {
    const imgs = arr.map(async img => await createImage(img));
    // const imgs = arr.map(img => createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);

    console.log(imgsEl);
    imgsEl.forEach(e => e.classList.add('parallel'));
  } catch (error) {
    throw error;
  }
};
loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);

// Promise.race([
//   createImage('./img/img-2.jpg'),
//   createImage('./img/img-1.jpg'),
//   createImage('./img/img-3.jpg'),
// ]).then(res => console.log(res));
