import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import gameTwoNode from './gameTwo.js';
import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME} from '../utils/changeLevel.js';

const gameOneTemplate = `
  ${getHeaderNode(INITIAL_GAME)}
  <section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </section>`;

const gameOneNode = createNodeFromTemplate(gameOneTemplate);
const gameOneForm = gameOneNode.querySelector(`.game__content`);
const questionOneRadioNodes = gameOneNode.querySelectorAll(`input[name="question1"]`);
const questionTwoRadioNodes = gameOneNode.querySelectorAll(`input[name="question2"]`);

gameOneForm.addEventListener(`input`, () => {
  let questionOneIsChecked = false;
  let questionTwoIsChecked = false;

  questionOneRadioNodes.forEach(function (el) {
    if (el.checked) {
      questionOneIsChecked = true;
    }
  });
  questionTwoRadioNodes.forEach(function (el) {
    if (el.checked) {
      questionTwoIsChecked = true;
    }
  });

  if (questionOneIsChecked && questionTwoIsChecked) {
    appendNodeToMain(gameTwoNode);
  }
});

export default gameOneNode;
