const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const messageDiv = document.getElementById('message');

passwordForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    showMessage('Las contraseñas no coinciden');
    return;
  }
  
  // Verificar la fortaleza de la contraseña
  if (!isStrongPassword(password)) {
    showMessage('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número');
    return;
  }
  
  showMessage('¡La contraseña es válida!');
});

function showMessage(message) {
  messageDiv.textContent = message;
}

function isStrongPassword(password) {
  // Utilizar una expresión regular para verificar si la contraseña cumple con los criterios de seguridad
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

function Show() {
  var passwordInputs = document.querySelectorAll('input[type="password"]');
  var checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxInputs.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        passwordInputs[index].type = "text";
      } else {
        passwordInputs[index].type = "password";
      }
    });
  });
}


