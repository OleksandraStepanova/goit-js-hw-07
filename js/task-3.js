const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", updateNameOutput);

function updateNameOutput(event) {    
    
    const input = event.currentTarget.value.trim();
    console.log(input)
    
    if (input===``) {        
        nameOutput.innerHTML = 'Anonymous';
    }
    else {
        nameOutput.innerHTML = `${input}`;
    }
   
}