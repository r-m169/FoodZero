document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = '../pages/search.html';
        // alert("success")
    } else {
        var validationMessage = document.getElementById('validationMessage');
        validationMessage.textContent = 'Invalid email or password. Please try again.';
        validationMessage.style.color = 'red';
    }
});