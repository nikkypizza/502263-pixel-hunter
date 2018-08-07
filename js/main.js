'use strict';
const keyCodeMap = {
  RIGHT_ARROW: 37,
  LEFT_ARROW: 39
};

const documentBodyNode = document.querySelector(`body`);
const documentMainNode = documentBodyNode.querySelector(`#main`);
const templateArr = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);
const arrowBtnContainerMarkup = `
  <div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;

// Добавляет блок со стрелками в конец body
documentBodyNode.insertAdjacentHTML(`beforeEnd`, arrowBtnContainerMarkup);

const arrowBtnsContainer = document.querySelector(`.arrows__wrap`);
const arrowBtnsArr = arrowBtnsContainer.querySelectorAll(`.arrows__btn`);
let currentIndex = 0;

// Удаляет содержимое documentMainNode и добавляет новый темплейт
const appendTemplate = (el) => {
  documentMainNode.innerHTML = ``;
  documentMainNode.appendChild(el.cloneNode(true));
};

const renderScreen = (i) => {
  i = i < 0 ? templateArr.length - 1 : i;
  i = i >= templateArr.length ? 0 : i;
  currentIndex = i;
  appendTemplate(templateArr[currentIndex]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case keyCodeMap.RIGHT_ARROW:
      renderScreen(++currentIndex);
      break;
    case keyCodeMap.LEFT_ARROW:
      renderScreen(--currentIndex);
      break;
  }
});

arrowBtnsContainer.addEventListener(`click`, (evt) => {
  switch (evt.target) {
    case arrowBtnsArr[0]:
      renderScreen(--currentIndex);
      break;
    case arrowBtnsArr[1]:
      renderScreen(++currentIndex);
      break;
  }
});

// Показывает экран `greeting` согласно ТЗ
renderScreen(1);
