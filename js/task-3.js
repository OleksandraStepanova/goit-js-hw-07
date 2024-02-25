const newText = document.querySelector("#name-input");
const hello = document.querySelector("#name-output");
newText.addEventListener("input", getName);
function getName(event) {    
    
    const input = event.currentTarget.value;
    const arr = input.split('');

    if (!arr.every(v => v === " ")) {
         hello.innerHTML = event.currentTarget.value.trim();
    }
   
}