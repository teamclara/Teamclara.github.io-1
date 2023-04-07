// Define the correct password
const correctPassword = 'clara@123';
const usernamenew = 'teamclara';

// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the input element and the password value
  const input = document.querySelector('input[type=password]');
  const password = input.value;
  const input1 = document.querySelector('input[type=text]');
  const username = input1.value;
  
  
  // Check if the password is correct
  if (password === correctPassword && username === usernamenew) {
    // Password is correct, redirect to the dashboard
    window.location.href = 'home.html';
  } else {
    // Password is incorrect, display an error message
    const error = document.querySelector('.error');
    error.textContent = 'Incorrect password. Please try again.';
    input.value = '';
  }
});
