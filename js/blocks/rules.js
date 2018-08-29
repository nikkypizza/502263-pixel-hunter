import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import gameOneNode from './gameOne.js';
import getHeaderNode from './getHeaderNode.js';

const rulesInlineIcons = {
  photo: `<img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото">`,
  paint: `<img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок">`
};

const rulesDescriptionsSet = new Set([
  `Угадай 10 раз для каждого изображения фото ${rulesInlineIcons.photo} или рисунок ${rulesInlineIcons.paint}`,
  `Фотографиями или рисунками могут быть оба изображения.`,
  `На каждую попытку отводится 30 секунд.`,
  `Ошибиться можно не более 3 раз.`
]);

const rulesTemplate = `
  ${getHeaderNode()}
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      ${[...rulesDescriptionsSet].map((it) => `<li>${it}</li>`).join(``)}
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;

const rulesNode = createNodeFromTemplate(rulesTemplate);
const rulesInput = rulesNode.querySelector(`.rules__input`);
const rulesSubmitBtn = rulesNode.querySelector(`.rules__button`);
const rulesForm = rulesNode.querySelector(`.rules__form`);

// Кнопка активна, если инпут не пуст
rulesInput.addEventListener(`input`, () => {
  rulesSubmitBtn.disabled = rulesInput.value.length === 0;
});

// При отправке формы переходим на новый экран
rulesForm.addEventListener(`submit`, () => {
  appendNodeToMain(gameOneNode);
});

export default rulesNode;
