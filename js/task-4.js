const form = document.querySelector("form");

form.addEventListener("submit",addUser);

function addUser(event) {
    event.preventDefault();
    const login = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if ((login==='') || (password === '')) {
        alert('All form fields must be filled in')
    }
    else {
    const user = {
        login: login.trim(),
        password: event.target.elements.password.value.trim()
    };
    console.log(user);
    } 
}