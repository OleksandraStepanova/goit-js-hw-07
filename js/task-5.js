function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", setColor);

function setColor(event) {
  const newColor = getRandomHexColor()
  color.style.color = newColor;
  document.body.style.backgroundColor = newColor;
}