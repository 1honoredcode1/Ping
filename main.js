const msg = 'Please provide a valid email address';
const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');

const error = document.createElement('p');
error.classList.add('error_text');
error.textContent = msg;

const success = document.createElement('p');
success.classList.add('success_text');
success.textContent = 'Thanks! You’ll be notified when we launch.';

function checkEmail(e) {
  e.preventDefault();
  const emailInput = form.querySelector('[type="email"]');
  const email = emailInput.value;

  if (!validateEmail(email)) {
    if (form.contains(success)) {
      form.removeChild(success);
    }
    form.classList.add('error');
    if (!form.contains(error)) {
      form.insertBefore(error, button);
    }
  } else {
    if (form.contains(error)) {
      form.removeChild(error);
    }
    form.classList.remove('error');

    if (!form.contains(success)) {
      form.insertBefore(success, button);
    }

    emailInput.value = '';

    setTimeout(() => {
      if (form.contains(success)) {
        form.removeChild(success);
      }
    }, 4000);
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);
