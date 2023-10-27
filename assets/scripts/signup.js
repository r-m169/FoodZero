// document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const username = document.querySelector('input[name="username"]').value;
//     const password = document.querySelector('input[name="password"]').value;
//     const email = document.querySelector('input[name="email"]').value;

//     const requestData = {
//         username: username,
//         password: password,
//         email: email
//     };

//     fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//     })
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error.message)); 
// });

