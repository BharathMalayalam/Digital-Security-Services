const passwordInput = document.getElementById('password');
const strengthDisplay = document.getElementById('strength');

if (passwordInput) {
  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    strengthDisplay.textContent = getPasswordStrength(password);
  });
}

function getPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[@$!%*?&]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      strengthDisplay.style.color = 'red';
      return 'Very Weak';
    case 2:
      strengthDisplay.style.color = 'orange';
      return 'Weak';
    case 3:
      strengthDisplay.style.color = 'goldenrod';
      return 'Medium';
    case 4:
      strengthDisplay.style.color = 'blue';
      return 'Strong';
    case 5:
      strengthDisplay.style.color = 'green';
      return 'Very Strong';
  }
}
