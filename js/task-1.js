const categories = document.querySelector("#categories");


const number = categories.children.length;
console.log("Number of categories: " + number);

const elements = document.querySelectorAll(".item");

elements.forEach(function (element) {
    const textTitle = element.firstElementChild.textContent;
    console.log("Category: " + textTitle);
    const numberChild = element.lastElementChild.children.length;
    console.log("Elements: " + numberChild);    
})

