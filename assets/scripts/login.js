document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var findTheUser = users.find(function(user){
        return user.email === email && user.password === password;
    })
    if (findTheUser) {
        window.location.href = '../pages/search.html';
        // alert("success")
    } else {
        var validationMessage = document.getElementById('validationMessage');
        validationMessage.textContent = 'Invalid email or password. Please try again.';
        validationMessage.style.color = 'red';
    }
   
});