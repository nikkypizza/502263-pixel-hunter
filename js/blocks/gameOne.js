import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import gameTwoNode from './gameTwo.js';
import getHeaderNode from './getHeaderNode.js';
import {INITIAL_GAME} from '../utils/changeLevel.js';
import {GAME_DATA} from '../data/game-data.js';

const getGameOptionNode = (data, optionIndex) => `
  <div class="game__option">
    <img src="${data[0].options[optionIndex].src}" alt="${data[0].options[optionIndex].alt}" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="${data[0].options[optionIndex].inputName}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="${data[0].options[optionIndex].inputName}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;

const gameOneTemplate = (data) => `
  ${getHeaderNode(INITIAL_GAME)}
  <section class="game">
    <p class="game__task">${data[0].task}</p>
    <form class="game__content">
      ${getGameOptionNode(data, 0)}
      ${getGameOptionNode(data, 1)}
    </form>
    <ul class="stats">
      ${INITIAL_GAME.statistics.join(``)}
    </ul>
  </section>`;

const gameOneNode = createNodeFromTemplate(gameOneTemplate(GAME_DATA));
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
