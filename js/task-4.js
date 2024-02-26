const form = document.querySelector("form");

form.addEventListener("submit",addUser);

function addUser(event) {
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    event.preventDefault();
    event.target.elements.email.value = ``;
    event.target.elements.password.value = ``;
   
    if ((email==='') || (password === '')) {
        alert('All form fields must be filled in')
    }
    else {
    const user = {
        email,
        password
    };
    console.log(user);
    } 
}