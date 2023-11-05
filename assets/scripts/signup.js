document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById('sign-up-form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const phone_input = document.getElementById('phone-input');
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");


    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        emailError.textContent = "";
        passwordError.textContent = "";
        validationMessage.textContent = "";
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        // const name = nameInput.value.trim();

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
            passwordError.textContent = "Password is not valid";
            passwordError.style.color = "red";
            return; 
        }

        function isValidPassword(password) {
            return password.length >= 6 && !password.includes(" ") && /[A-Z]/.test(password);
        }

        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            validationMessage.textContent = "Data already exists";
            validationMessage.style.color = "red";
            return;
        }

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;
        const nameValue = nameInput.value;
        const phoneNumberValue = phone_input.value
        localStorage.setItem('name', nameValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passwordValue);
        localStorage.setItem('phone_number', phoneNumberValue);
        window.location.href = "login.html";
    });
});
// localStorage.removeItem('email')
// if (!localStorage.getItem('email')) {
//     console.log('Email removed from localStorage'); 
// } else {
//     console.log('Email still exists in localStorage');  
// }