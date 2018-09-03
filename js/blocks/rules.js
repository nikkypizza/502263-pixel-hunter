import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import {renderGameScreen} from './renderGameScreen.js';
import {GAME_DATA} from '../data/game-data.js';

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

const rulesTemplate = (dataSet) => `
  <header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      ${[...dataSet].map((it) => `<li>${it}</li>`).join(``)}
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;

const rulesNode = createNodeFromTemplate(rulesTemplate(rulesDescriptionsSet));
const rulesInput = rulesNode.querySelector(`.rules__input`);
const rulesSubmitBtn = rulesNode.querySelector(`.rules__button`);
const rulesForm = rulesNode.querySelector(`.rules__form`);

// Кнопка активна, если инпут не пуст
rulesInput.addEventListener(`input`, () => {
  rulesSubmitBtn.disabled = rulesInput.value.length === 0;
});

rulesForm.addEventListener(`submit`, () => {
  rulesForm.reset();
  appendNodeToMain(renderGameScreen(GAME_DATA[0]));
});

export default rulesNode;
