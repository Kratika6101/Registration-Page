const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const successMessage = document.getElementById("successMessage");

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = "block";
  input.style.borderColor = "red";
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
  error.style.display = "none";
  input.style.borderColor = "#ccc";
}

function validateEmail(email) {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  return /^\d{10,15}$/.test(phone.replace(/\D/g, ""));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Name Validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email Validation
  if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, "Invalid email format.");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Phone Validation
  if (!validatePhone(phoneInput.value.trim())) {
    showError(phoneInput, "Enter a valid phone number.");
    isValid = false;
  } else {
    clearError(phoneInput);
  }

  if (isValid) {
    successMessage.textContent = "Registration Successful!";
    form.reset();
    setTimeout(() => {
      successMessage.textContent = "";
    }, 4000);
  }
});
