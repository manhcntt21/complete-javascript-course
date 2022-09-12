'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// keyboard event
document.addEventListener('keydown', function (e) {
  console.log('a key was pressed');
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

// cai thien sau

// const modal = document.querySelectorAll('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelectorAll('.close-modal');
// const btnOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function (i) {
//   console.log('button clicked');
//   modal[i].classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function (i) {
//   modal[i].classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnOpenModal.length; i++) {
//   console.log(btnOpenModal[i].textContent);
//   btnOpenModal[i].addEventListener('click', function () {
//     console.log('button clicked');
//     modal[i].classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

//   btnCloseModal[i].addEventListener('click', function () {
//     modal[i].classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//   overlay.addEventListener('click', function () {
//     modal[i].classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
// }

// not working

// for (let i = 0; i < btnOpenModal.length; i++) {
//   console.log(btnOpenModal[i].textContent);
//   btnOpenModal[i].addEventListener('click', openModal(i));

//   btnCloseModal[i].addEventListener('click', closeModal(i));

//   overlay.addEventListener('click', closeModal(i));
// }
