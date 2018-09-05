import createNodeFromTemplate from '../utils/createNode.js';
import {currentGame} from '../utils/changeLevel.js';
import {GAME_DATA} from '../data/game-data.js';
import appendNodeToMain from '../utils/appendNode.js';
import statsTemplate from './stats.js';
import {gameOneTemplate, gameTwoTemplate, gameThreeTemplate} from './gameScreenTemplates.js';
import updateGameStats from '../utils/updateGameStats.js';
import {getGameStatisticsNodes} from './getGameStatistics.js';

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
  const currentGameType = gameTypes[data.type];
  const currentGameScreen = createNodeFromTemplate(currentGameType(data));
  const currentGameTask = currentGameScreen.querySelector(`.game__task`).innerHTML;
  const gameAnswers = currentGameScreen.querySelectorAll(`input`);

  switch (currentGameTask) {
    case gameTasks.firstGame:
      const gameForm = currentGameScreen.querySelector(`form`);

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
      const gameOptions = currentGameScreen.querySelectorAll(`.game__option`);

      gameOptions.forEach((el) => {
        el.addEventListener(`click`, (evt) => {
          updateGameStats(currentGameScreen, evt);
          renderFollowingScreen();
        });
      });
      break;
  }

  const renderFollowingScreen = () => {
    let currentStatistics = getGameStatisticsNodes(currentGame.statistics);

    if (currentGame.lives <= 0) {
      const statsNodeFail = createNodeFromTemplate(statsTemplate(currentStatistics, true));
      appendNodeToMain(statsNodeFail);
      // обнулить currentGame
      return;
    }
    if (currentGame.lives > 0 && currentGame.level < GAME_DATA.length - 1) {
      currentGame.level++;
      appendNodeToMain(renderGameScreen(GAME_DATA[currentGame.level]));
    } else {
      const statsNodeWin = createNodeFromTemplate(statsTemplate(currentStatistics));
      currentGame.level++;
      appendNodeToMain(statsNodeWin);
      // обнулить currentGame
    }
  };

  return currentGameScreen;
};

export {renderGameScreen, gameTasks};
