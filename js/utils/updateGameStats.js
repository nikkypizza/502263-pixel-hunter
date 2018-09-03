import {gameTasks} from '../blocks/renderGameScreen.js';
import {GAME_DATA, statsAnswerTypeMap} from '../data/game-data.js';
import {INITIAL_GAME_COPY} from '../utils/changeLevel.js';
import reducePlayerLives from '../utils/reducePlayerLives.js';

const updateGameStats = (currentScreen, evt) => {
  const currentGameScreen = GAME_DATA[INITIAL_GAME_COPY.level];
  const currentGameTask = currentScreen.querySelector(`.game__task`).innerHTML;
  const checkedInputs = currentScreen.querySelectorAll(`input:checked`);
  const evtTargetParent = evt.target.parentNode;
  const evtTargetInput = evtTargetParent.querySelector(`input`);

  const setStatisticsResult = (result) => {
    INITIAL_GAME_COPY.answers.push(result);
    INITIAL_GAME_COPY.statistics[INITIAL_GAME_COPY.level] = eval(`statsAnswerTypeMap.${result}`);
  };

  switch (currentGameTask) {
    case gameTasks.firstGame:
      if (checkedInputs[0].value === currentGameScreen.options[0].answer &&
          checkedInputs[1].value === currentGameScreen.options[1].answer) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        INITIAL_GAME_COPY.lives = reducePlayerLives(INITIAL_GAME_COPY.lives);
      }
      break;

    case gameTasks.secondGame:
      if (evtTargetInput.value === currentGameScreen.options[0].answer) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        INITIAL_GAME_COPY.lives = reducePlayerLives(INITIAL_GAME_COPY.lives);
      }
      break;

    case gameTasks.thirdGame:
      if (evtTargetParent.classList.contains(`game__option--selected`)) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        INITIAL_GAME_COPY.lives = reducePlayerLives(INITIAL_GAME_COPY.lives);
      }
      break;
  }
};

export default updateGameStats;
