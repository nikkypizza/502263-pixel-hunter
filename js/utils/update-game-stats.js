import {gameTasks} from '../blocks/render-game-screen.js';
import {GAME_DATA} from '../data/game-data.js';
import {currentGame} from '../utils/change-level.js';
import reducePlayerLives from '../utils/reduce-player-lives.js';

const setStatisticsResult = (result) => {
  const answerItem = {
    isCorrect: result === `correct` ? true : false,
    answerTime: currentGame.time / 1000,
    quality: currentGame.time > 20 ? `slow` : `fast`
  };
  currentGame.answers.push(answerItem);
  currentGame.statistics[currentGame.level] = answerItem.isCorrect ? answerItem.quality : result;
};

const updateGameStats = (currentScreen, evt) => {
  const currentGameScreen = GAME_DATA[currentGame.level];
  const currentGameTask = currentScreen.querySelector(`.game__task`).innerHTML;
  const evtTargetParent = evt.target.parentNode;

  switch (currentGameTask) {
    case gameTasks.firstGame:
      const checkedInputs = currentScreen.querySelectorAll(`input:checked`);
      if (checkedInputs[0].value === currentGameScreen.options[0].answer &&
          checkedInputs[1].value === currentGameScreen.options[1].answer) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        currentGame.lives = reducePlayerLives(currentGame.lives);
      }
      break;

    case gameTasks.secondGame:
      const evtTargetInput = evtTargetParent.querySelector(`input`);

      if (evtTargetInput.value === currentGameScreen.options[0].answer) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        currentGame.lives = reducePlayerLives(currentGame.lives);
      }
      break;

    case gameTasks.thirdGame:
      if (evtTargetParent.classList.contains(`game__option--selected`)) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        currentGame.lives = reducePlayerLives(currentGame.lives);
      }
      break;
  }
};

export default updateGameStats;
