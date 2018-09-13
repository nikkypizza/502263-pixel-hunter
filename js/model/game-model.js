import {INITIAL_GAME} from '../utils/change-level.js';
import {GAME_DATA} from '../data/game-data.js';
import {changeLevel} from '../utils/change-level.js';
import reducePlayerLives from '../utils/reduce-player-lives.js';

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this._state = INITIAL_GAME;
    this.currentGame = Object.assign({}, this._state);
  }

  get state() {
    return this.currentGame;
  }

  nextLevel() {
    changeLevel(this.currentGame.level, this.currentGame.level++);
  }

  decrementLives() {
    this.currentGame.lives = reducePlayerLives(this.currentGame.lives);
  }

  restart() {
    this.currentGame = Object.assign({}, INITIAL_GAME);
    // this.currentGame.answers = ``;
  }

  updateStats(currentScreen, evt) {
    const setStatisticsResult = (result) => {
      let answerQuality = null;
      if (this.currentGame.time > 20) {
        answerQuality = `fast`;
      } else if (this.currentGame.time < 10) {
        answerQuality = `slow`;
      } else {
        answerQuality = `correct`;
      }
      const answerItem = {
        isCorrect: result === `correct` ? true : false,
        answerTime: this.currentGame.time,
        quality: answerQuality
      };
      this.currentGame.answers.push(answerItem);
      this.currentGame.statistics[this.currentGame.level] = answerItem.isCorrect ? answerItem.quality : result;
    };

    const currentGameScreen = GAME_DATA[this.currentGame.level];
    const evtTargetParent = evt.target.parentNode;

    switch (currentScreen.data.type) {
      case `doubleQuestion`:
        const checkedInputs = currentScreen.element.querySelectorAll(`input:checked`);
        if (checkedInputs[0].value === currentGameScreen.options[0].answer &&
          checkedInputs[1].value === currentGameScreen.options[1].answer) {
          setStatisticsResult(`correct`);
        } else {
          setStatisticsResult(`wrong`);
          this.currentGame.lives = reducePlayerLives(this.currentGame.lives);
        }
        break;

      case `singleQuestion`:
        const evtTargetInput = evtTargetParent.querySelector(`input`);

        if (evtTargetInput.value === currentGameScreen.options[0].answer) {
          setStatisticsResult(`correct`);
        } else {
          setStatisticsResult(`wrong`);
          this.currentGame.lives = reducePlayerLives(this.currentGame.lives);
        }
        break;

      case `tripleQuestion`:
        if (evtTargetParent.classList.contains(`game__option--selected`)) {
          setStatisticsResult(`correct`);
        } else {
          setStatisticsResult(`wrong`);
          this.currentGame.lives = reducePlayerLives(this.currentGame.lives);
        }
        break;
    }
  }
}
