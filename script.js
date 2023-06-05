//Get the necessary elements from the DOM
const emailInput = document.getElementById('emailInput');
const registerButton = document.getElementById('registerButton');
const message = document.getElementById('message');

// Add a click event listener to the register button
registerButton.addEventListener('click', function() {
  // Get the email entered by the user
  const email = emailInput.value;
  
  // Validate the email (you can add more complex validation if needed)
  if (email.trim() === '') {
    // Display an error message if the email is empty
    message.textContent = 'Please enter a valid email address.';
  } else {
    // Display the "Thank you" message
    message.textContent = 'Thank you for registering!';
  }

  window.location.href = 'pro.html';
});
