function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const destroy = document.querySelector('button[data-destroy]');
destroy.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  boxes.innerHTML = '';
}

const inputElement = document.querySelector("input");

const input = document.querySelector("#controls");
input.firstElementChild.addEventListener("input", createNumber);
let newNumber = 0;
function createNumber(event) {
  newNumber = parseInt(event.currentTarget.value);  
}

const create = document.querySelector('button[data-create]');
create.addEventListener("click", createDiv);
function createDiv(event) {
  createBoxes(newNumber);
  inputElement.value = '';
}

const boxes = document.querySelector("#boxes");



     
function createBoxes(amount) {
  if ((amount > 0) && (amount <= 100)) {
    boxes.innerHTML = '';
    let a = 30;
    for (let i = 0; i < amount; i = i + 1){           
      const newDiv = document.createElement("div");
      newDiv.classList.add("new");
      newDiv.style.backgroundColor = getRandomHexColor();
      
      newDiv.style.width = `${a}px`;
      newDiv.style.height = `${a}px`;     
       a = a + 10;
      boxes.append(newDiv);
      console.log(boxes);
    }
  }  
}


