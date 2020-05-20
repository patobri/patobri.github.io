//DOM elements
const salaEl = document.getElementById('sala');
const passwordEl = document.getElementById('password');
const generateEl = document.getElementById('generate');
const clipboardSalaEl = document.getElementById('clipboardSala');
const clipboardPasswordEl = document.getElementById('clipboardPassword');

// Generate event listener
generateEl.addEventListener('click', () => {
  salaEl.innerText = 'https://meet.jit.si/' + generateSala();
  passwordEl.innerText = generatePassword();
});

// Copy to clipboard
clipboardSalaEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const sala = salaEl.innerText;

  if (!sala) {
    return;
  }

  textarea.value = sala;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
});

clipboardPasswordEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = passwordEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
});

// Generate functions
function generateSala() {
    var length = 20,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function generatePassword() {
    var length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(){}[]=/_",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
