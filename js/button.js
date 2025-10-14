const inputs = document.querySelectorAll('#step1 input');
const button = document.querySelector('.contact-section__button');
const step2 = document.getElementById('step2');
const phoneInput = document.getElementById('user-phone');
const emailInput = document.getElementById('user-email'); 

function checkInputs() {
  let allFilled = true;

  inputs.forEach(input => {
    const output = input.parentElement.querySelector('.contact-section__form-output');
    const value = input.value.trim();
    output.textContent = '';


    if (value === '') {
      output.textContent = "Поле обов’язкове для заповнення";
      output.style.color = 'red';
      allFilled = false;
      return;
    }

    if (input.id === 'user-phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        output.textContent = 'Введіть не менше 10 цифр';
        output.style.color = 'red';
        allFilled = false;
        return;
      }
    }


    if (input.id === 'user-email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const allowedDomains = ['gmail.com', 'ukr.net', 'outlook.com', 'i.ua', 'meta.ua'];

      if (!emailPattern.test(value)) {
        output.textContent = 'Некоректна адреса електронної пошти';
        output.style.color = 'red';
        allFilled = false;
        return;
      }

      const domain = value.split('@')[1];
      if (!allowedDomains.includes(domain)) {
        output.textContent = `Дозволені домени: ${allowedDomains.join(', ')}`;
        output.style.color = 'red';
        allFilled = false;
        return;
      }
    }
  });

  if (allFilled) {
    button.classList.add('active');
    button.disabled = false;
  } else {
    button.classList.remove('active');
    button.disabled = true;
  }
}

inputs.forEach(input => input.addEventListener('input', checkInputs));

button.addEventListener('click', (e) => {
  e.preventDefault();
  checkInputs();

  const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
  const phoneValue = phoneInput.value.replace(/\D/g, '');
  const emailValue = emailInput.value.trim();
  const domain = emailValue.split('@')[1];
  const allowedDomains = ['gmail.com', 'ukr.net', 'outlook.com', 'i.ua', 'meta.ua'];

  if (allFilled && phoneValue.length >= 10 && allowedDomains.includes(domain)) {
    step2.classList.remove('section-calculator__hidden');
    step2.scrollIntoView({ behavior: 'smooth' });
  }
});

button.disabled = true;
