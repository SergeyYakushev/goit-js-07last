/*Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

const targetBtnDecrement = document.querySelector('[data-action="decrement"]');
const targetBtnIncrement = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = counterEl.textContent;
counterValue = 0;

targetBtnDecrement.addEventListener('click', onTargetButtonDecrementClick);

targetBtnIncrement.addEventListener('click', onTargetButtonIncrementClick);

function onTargetButtonDecrementClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

function onTargetButtonIncrementClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
