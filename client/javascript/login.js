document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Username: ' + username);
    console.log('Password: ' + password);
    if(username === 'admin@gmail.com' && password === 'admin' ) {
        document.querySelector('#logon').innerHTML = "Your in";
    } else {
        document.querySelector('#logon').innerHTML = "Your not allowed in";
    }

});