const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (!email || !password) {
        alert('All fields must be filled');
        return
    }

    const loginData = {
        email,
        password
    };

    console.log(loginData);
    loginForm.reset();
});