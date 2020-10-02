/*Задание 1
В HTML есть список категорий ul#categories.
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество 
элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

/*const itemEl = document.querySelectorAll('.item');
const quantityOfCategories = itemEl.length;

console.log(`'В списке ${quantityOfCategories} категории.`);

const titleEl = document.querySelectorAll('h2');

titleEl.forEach(e => console.log(e.textContent));

const listEl = document.querySelectorAll('ul>li');

listEl.forEach(e => console.log(e.textContent));*/

const itemEl = document.querySelectorAll('.item');
console.log('itemEl', itemEl);
const quantityCategories = itemEl.length;

console.log(`В списке ${quantityCategories} категории.`);

const listItemCategories = itemEl.forEach(element => {
  const titleCategories = element.firstElementChild.textContent;
  const quantityInCategory = element.lastElementChild.querySelectorAll('li')
    .length;

  console.log(`Категория: ${titleCategories}`);
  console.log(`Количество элементов: ${quantityInCategory}\n\n`);
});
