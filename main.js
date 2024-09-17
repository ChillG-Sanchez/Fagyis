document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('iceCreamForm');
  const nameInput = document.getElementById('name');
  const passwordInput = document.getElementById('password');
  const passwordLength = document.getElementById('passwordLength');
  const iceCreamInput = document.getElementById('iceCream');
  const message = document.getElementById('message');
  const iceCreamList = ['Vanília', 'Csokoládé', 'Eper', 'Puncs'];

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
    if (iceCreamList.includes(iceCreamInput.value)) {
      iceCreamInput.style.backgroundColor = 'lightgreen';
    } else {
      iceCreamInput.style.backgroundColor = 'yellow';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedIceCream = iceCreamInput.value;
    if (iceCreamList.includes(selectedIceCream)) {
      message.textContent = `A(z) ${selectedIceCream} fagylalt ára: 500 Ft.`;
    } else {
      message.textContent = 'Beszerzés folyamatban';
    }
  });
});