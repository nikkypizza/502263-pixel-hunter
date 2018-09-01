import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import gameThreeNode from './gameThree.js';
import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME} from '../utils/changeLevel.js';
import {GAME_DATA} from '../data/game-data.js';

const getGameOptionNode = (data, optionIndex) => `
  <div class="game__option">
    <img src="${data[1].options[optionIndex].src}" alt="${data[1].options[optionIndex].alt}" width="705" height="455">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="${data[1].options[optionIndex].inputName}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="${data[1].options[optionIndex].inputName}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;

const gameTwoTemplate = (data) => `
  ${getHeaderNode(INITIAL_GAME)}
  <section class="game">
    <p class="game__task">${data[1].task}</p>
    <form class="game__content  game__content--wide">
      ${getGameOptionNode(data, 0)}
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

const gameTwoNode = createNodeFromTemplate(gameTwoTemplate(GAME_DATA));
const gameTwoContentNode = gameTwoNode.querySelector(`.game__content`);

gameTwoContentNode.addEventListener(`click`, (evt) => {
  if (evt.target.parentNode.classList.contains(`game__answer`)) {
    appendNodeToMain(gameThreeNode);
  }
});

export default gameTwoNode;
