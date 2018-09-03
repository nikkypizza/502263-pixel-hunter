import createNodeFromTemplate from '../utils/createNode.js';
import {INITIAL_GAME_COPY} from '../utils/changeLevel.js';
import {GAME_DATA} from '../data/game-data.js';
import appendNodeToMain from '../utils/appendNode.js';
import statsTemplate from './stats.js';
import {gameOneTemplate, gameTwoTemplate, gameThreeTemplate} from './gameScreenTemplates.js';
import updateGameStats from '../utils/updateGameStats.js';

const gameTypes = {
  doubleQuestion: gameOneTemplate,
  singleQuestion: gameTwoTemplate,
  tripleQuestion: gameThreeTemplate
};

const gameTasks = {
  firstGame: GAME_DATA[0].task,
  secondGame: GAME_DATA[1].task,
  thirdGame: GAME_DATA[2].task
};
const renderGameScreen = (data) => {
  const statsNode = createNodeFromTemplate(statsTemplate(INITIAL_GAME_COPY.statistics));
  const currentGameType = gameTypes[data.type];
  const currentGameScreen = createNodeFromTemplate(currentGameType(data));

  const currentGameTask = currentGameScreen.querySelector(`.game__task`).innerHTML;
  const gameAnswers = currentGameScreen.querySelectorAll(`input`);
  const gameOptions = currentGameScreen.querySelectorAll(`.game__option`);
  const gameForm = currentGameScreen.querySelector(`form`);

  switch (currentGameTask) {
    case gameTasks.firstGame:
      const renderSecondGame = (evt) => {
        if ([...gameAnswers].filter((el) => el.checked).length === 2) {
          updateGameStats(currentGameScreen, evt);
          renderFollowingScreen();
        }
      };
      gameForm.addEventListener(`click`, renderSecondGame);
      break;
    case gameTasks.secondGame:
      gameAnswers.forEach((el) => {
        el.addEventListener(`click`, (evt) => {
          updateGameStats(currentGameScreen, evt);
          renderFollowingScreen();
        });
      });
      break;
    case gameTasks.thirdGame:
      gameOptions.forEach((el) => {
        el.addEventListener(`click`, (evt) => {
          updateGameStats(currentGameScreen, evt);
          renderFollowingScreen();
        });
      });
      break;
  }

  const renderFollowingScreen = () => {
    // if (INITIAL_GAME_COPY.lives === 0) {
    //    отрисовать конечный экран с сообщением о поражении
    // }
    if (INITIAL_GAME_COPY.lives > 0 && INITIAL_GAME_COPY.level < 9) {
      INITIAL_GAME_COPY.level++;
      appendNodeToMain(renderGameScreen(GAME_DATA[INITIAL_GAME_COPY.level]));
    } else {
      INITIAL_GAME_COPY.level++;
      appendNodeToMain(statsNode);
      // TODO - обнулить INITIAL_GAME_COPY, заполнить все данные
    }
  };

  return currentGameScreen;
};

export {renderGameScreen, gameTasks};
