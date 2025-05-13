const categories = document.querySelector("#categories");
// if (categories) {
    
//     const categoriesItem = document.querySelectorAll("#categories>li.item");
    
//     const numberOfCatecories = categoriesItem.length;
//     console.log(numberOfCatecories);
//     categoriesItem.forEach(categoriesItem => {
//         const categoryTytleElement = categoriesItem.querySelector("h2")
//         const categoryTytle = categoryTytleElement ? categoryTytleElement.textContent : "error"
//         const categoryListElement = categoriesItem.querySelector("ul")
//         const categoryList = categoryListElement ? categoryListElement.querySelectorAll('li') : []
//         const number = categoryList.length;
//         console.log(categoryTytle);
//         console.log(number);
//     });
    
    
    
// } else {
//     console.log(false);
    
// }



const number = categories.children.length;
console.log("Number of categories: " + number);

const elements = document.querySelectorAll(".item");

elements.forEach(function (element) {
    const textTitle = element.firstElementChild.textContent;
    console.log("Category: " + textTitle);
    const numberChild = element.lastElementChild.children.length;
    console.log("Elements: " + numberChild);    
})

