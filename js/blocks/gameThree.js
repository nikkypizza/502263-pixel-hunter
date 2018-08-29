import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import statsNode from './stats.js';
import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME} from '../utils/changeLevel.js';

const gameThreeTemplate = `
  ${getHeaderNode(INITIAL_GAME)}
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
      </div>
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
