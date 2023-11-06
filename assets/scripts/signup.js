document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("sign-up-form");
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const phoneInput = document.getElementById("phone-input");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      emailError.textContent = "";
      passwordError.textContent = "";
      validationMessage.textContent = "";
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!isValidEmail(email)) {
        emailError.textContent = "Email is not valid";
        emailError.style.color = "red";
        return;
      }
  
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
  
      if (!isValidPassword(password)) {
        passwordError.textContent =
          "Password must contain at least 6 characters and include an uppercase letter.";
        passwordError.style.color = "red";
        return;
      }
  
      function isValidPassword(password) {
        return /[A-Z]{1,}.*/.test(password) && password.length >= 6;
      }
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        validationMessage.textContent = "Data already exists";
        validationMessage.style.color = "red";
        return;
      }
  
      const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        phone_number: phoneInput.value,
      };
  
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "login.html";
    });
  });
// localStorage.removeItem('email')
// if (!localStorage.getItem('email')) {
//     console.log('Email removed from localStorage'); 
// } else {
//     console.log('Email still exists in localStorage');  
// }