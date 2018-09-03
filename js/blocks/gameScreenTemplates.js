import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME_COPY} from '../utils/changeLevel.js';

const getGameOneOptionNode = (data, optionIndex) => `
  <div class="game__option">
    <img src="${data.options[optionIndex].src}" alt="${data.options[optionIndex].alt}" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="${data.options[optionIndex].inputName}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="${data.options[optionIndex].inputName}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;
const gameOneTemplate = (data) => `
  ${getHeaderNode(INITIAL_GAME_COPY)}
  <section class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content">
      ${getGameOneOptionNode(data, 0)}
      ${getGameOneOptionNode(data, 1)}
    </form>
    <ul class="stats">
      ${INITIAL_GAME_COPY.statistics.join(``)}
    </ul>
  </section>`;

const gameTwoTemplate = (data) => `
  ${getHeaderNode(INITIAL_GAME_COPY)}
  <section class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data.options[0].src}" alt="${data.options[0].alt}" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="${data.options[0].inputName}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="${data.options[0].inputName}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      ${INITIAL_GAME_COPY.statistics.join(``)}
    </ul>
  </section>`;

const gameThreeTemplate = (data) => `
  ${getHeaderNode(INITIAL_GAME_COPY)}
  <section class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content  game__content--triple">
  <div class="game__option game__option--selected">
    <img src="${data.options[0].src}" alt="${data.options[0].alt}" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="${data.options[1].src}" alt="${data.options[1].alt}" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="${data.options[2].src}" alt="${data.options[2].alt}" width="304" height="455">
  </div>
    </form>
    <ul class="stats">
      ${INITIAL_GAME_COPY.statistics.join(``)}
    </ul>
  </section>`;

export {gameOneTemplate, gameTwoTemplate, gameThreeTemplate};
