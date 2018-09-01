import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import statsNode from './stats.js';
import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME} from '../utils/changeLevel.js';
import {GAME_DATA} from '../data/game-data.js';

const getGameOptionNode = (data, optionIndex) => `
  <div class="game__option">
    <img src="${data[2].options[optionIndex].src}" alt="${data[2].options[optionIndex].alt}" width="304" height="455">
  </div>`;

const gameThreeTemplate = (data) => `
  ${getHeaderNode(INITIAL_GAME)}
  <section class="game">
    <p class="game__task">${data[2].task}</p>
    <form class="game__content  game__content--triple">
      ${getGameOptionNode(data, 0)}
      ${getGameOptionNode(data, 1)}
      ${getGameOptionNode(data, 2)}
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </section>`;

const gameThreeNode = createNodeFromTemplate(gameThreeTemplate(GAME_DATA));
const gameContentNode = gameThreeNode.querySelector(`.game__content`);

gameContentNode.addEventListener(`click`, (evt) => {
  if (evt.target.parentNode.classList.contains(`game__option`)) {
    appendNodeToMain(statsNode);
  }
});

export default gameThreeNode;
