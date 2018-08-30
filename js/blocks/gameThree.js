import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import statsNode from './stats.js';
import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME} from '../utils/changeLevel.js';
import GAME_DATA from '../data/game-data.js';

// Удалил класс-модификатор `game__option--selected`
// для него не прописаны стили в style.css, значит можно без него
const getGameOptionNode = (index) => {
  return `
  <div class="game__option">
    <img src="${GAME_DATA.gameThree.options[index].src}" alt="${GAME_DATA.gameThree.options[index].alt}" width="304" height="455">
  </div>`;
};

const gameThreeTemplate = `
  ${getHeaderNode(INITIAL_GAME)}
  <section class="game">
    <p class="game__task">${GAME_DATA.gameThree.task}</p>
    <form class="game__content  game__content--triple">
      ${getGameOptionNode(0)}
      ${getGameOptionNode(1)}
      ${getGameOptionNode(2)}
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

const gameThreeNode = createNodeFromTemplate(gameThreeTemplate);
const gameContentNode = gameThreeNode.querySelector(`.game__content`);

gameContentNode.addEventListener(`click`, (evt) => {
  if (evt.target.parentNode.classList.contains(`game__option`)) {
    appendNodeToMain(statsNode);
  }
});

export default gameThreeNode;
