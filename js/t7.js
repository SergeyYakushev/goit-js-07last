/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />a
<span id="text">Абракадабра!</span> */

const refs = {
  input: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;

  console.log(refs.textEl.style.fontSize);
}
