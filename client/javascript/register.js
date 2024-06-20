document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const statusDiv = document.getElementById('registrationStatus');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const response = await fetch('https://ecs.the-sock-exchange.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        const data = await response.json();
        if (data.message === 'success') {
            statusDiv.textContent = 'Registration successful!';
            console.log(data.message)
            statusDiv.classList.add('alert', 'alert-success');
        } else {
            statusDiv.textContent = 'Registration failed!';
            console.log("fail")
            statusDiv.classList.add('alert', 'alert-danger');
        }
    });
});
