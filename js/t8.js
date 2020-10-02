/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
 создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */

const refs = {
  input: document.querySelector('input'),
  greateBoxesBtn: document.querySelector('[data-action="render"]'),
  destroyBoxesBtn: document.querySelector('[data-action="destroy"]'),
  boxEl: document.querySelector('#boxes'),
};

refs.greateBoxesBtn.addEventListener('click', createCb);
refs.destroyBoxesBtn.addEventListener('click', destroyCb);

function createCb() {
  createBoxes(refs.input.value);
}
function destroyCb() {
  refs.boxEl.innerHTML = '';
}

function createBoxes(amount) {
  const arrayEl = [];
  const w = 30;
  const h = 30;

  for (let i = 0; i < amount; i += 1) {
    const itemEl = document.createElement('div');

    itemEl.style.width = `${w + i * 10}px`;
    itemEl.style.height = `${h + i * 10}px`;
    itemEl.style.backgroundColor = randomColor();

    arrayEl.push(itemEl);
  }

  refs.boxEl.append(...arrayEl);
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${b}, ${g})`;
}
