import Jegkrem from './jegkrem.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('iceCreamForm');
  const nameInput = document.getElementById('name');
  const passwordInput = document.getElementById('password');
  const passwordLength = document.getElementById('passwordLength');
  const iceCreamInput = document.getElementById('iceCream');
  const message = document.getElementById('message');

  const iceCreamList = [
    new Jegkrem('Vanília', 500, 'Klasszikus vanília íz'),
    new Jegkrem('Csokoládé', 600, 'Nem is volt!'),
    new Jegkrem('Pisztácia', 550, 'A pisztácia kifogyott! Csokoládé nem is volt!!'),
    new Jegkrem('Eper', 550, 'Friss eper íz'),
    new Jegkrem('Puncs', 650, 'Édes puncs íz')
  ];

  passwordInput.addEventListener('input', () => {
    passwordLength.textContent = `${passwordInput.value.length} / 8`;
  });

  nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
      nameInput.style.border = '2px solid red';
    } else {
      nameInput.style.border = '';
    }
  });

  iceCreamInput.addEventListener('blur', () => {
    const selectedIceCream = iceCreamList.find(iceCream => iceCream.nev === iceCreamInput.value);
    if (selectedIceCream) {
      iceCreamInput.style.backgroundColor = 'lightgreen';
    } else {
      iceCreamInput.style.backgroundColor = 'yellow';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedIceCream = iceCreamList.find(iceCream => iceCream.nev === iceCreamInput.value);
    if (selectedIceCream) {
      message.textContent = `A(z) ${selectedIceCream.nev} fagylalt ára: ${selectedIceCream.ar} Ft.`;
    } else {
      message.textContent = 'Beszerzés folyamatban';
    }
  });
});