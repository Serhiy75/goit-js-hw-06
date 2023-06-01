const listId = document.querySelector('ul#categories');
console.log(`Number of categories: ${listId.childElementCount}`);

const itemClass = document.querySelectorAll('.item');
itemClass.forEach(itemOfList => {
    console.log(`Category: ${itemOfList.firstElementChild.textContent}`);
    console.log(`Elements: ${itemOfList.lastElementChild.childElementCount}`);
});