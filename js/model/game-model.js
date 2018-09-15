import {serverData} from '../controller/application.js';
import adaptServerData from '../data/data-adapter.js';

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.AnswerQuality = {
      CORRECT: `correct`,
      WRONG: `wrong`,
      FAST: `fast`,
      SLOW: `slow`
    };
    this.GameType = {
      SINGLE_QUESTION: `singleQuestion`,
      DOUBLE_QUESTION: `doubleQuestion`,
      TRIPLE_QUESTION: `tripleQuestion`
    };
    this._state = Object.freeze({
      level: 0,
      lives: 3,
      time: 30,
      answers: [],
      statistics: new Array(10).fill(`unknown`)
    });
    this.currentGame = Object.assign({}, this._state);
    this.questionsData = adaptServerData(serverData);
  }

  get state() {
    return this.currentGame;
  }

  decrementLives(currentLives) {
    return currentLives > 0 ? --currentLives : -1;
  }

  restart() {
    this.currentGame = Object.assign({}, this._state);
    this.currentGame.answers = [];
    this.currentGame.statistics = this._state.statistics; // ??
  }

  setStatisticsResult(result) {
    let answerQuality = null;
    if (this.currentGame.time > 20) {
      answerQuality = this.AnswerQuality.FAST;
    } else if (this.currentGame.time < 10) {
      answerQuality = this.AnswerQuality.SLOW;
    } else {
      answerQuality = this.AnswerQuality.CORRECT;
    }
    const answerItem = {
      isCorrect: result === this.AnswerQuality.CORRECT ? true : false,
      answerTime: this.currentGame.time,
      quality: answerQuality
    };
    this.currentGame.answers.push(answerItem);
    this.currentGame.statistics[this.currentGame.level] = answerItem.isCorrect ? answerItem.quality : result; // Тут переписывается _state
  }

  updateStats(currentScreen, evt) {
    const currentGameScreen = this.questionsData[this.currentGame.level];
    const evtTargetParent = evt.target.parentNode;

    switch (currentScreen.data.type) {
      case this.GameType.SINGLE_QUESTION:
        const evtTargetInput = evtTargetParent.querySelector(`input`);

        if (evtTargetInput.value === currentGameScreen.options[0].answer) {
          this.setStatisticsResult(this.AnswerQuality.CORRECT);
        } else {
          this.setStatisticsResult(this.AnswerQuality.WRONG);
          this.currentGame.lives = this.decrementLives(this.currentGame.lives);
        }
        break;

      case this.GameType.DOUBLE_QUESTION:
        const checkedInputs = currentScreen.element.querySelectorAll(`input:checked`);
        if (checkedInputs[0].value === currentGameScreen.options[0].answer &&
          checkedInputs[1].value === currentGameScreen.options[1].answer) {
          this.setStatisticsResult(this.AnswerQuality.CORRECT);
        } else {
          this.setStatisticsResult(this.AnswerQuality.WRONG);
          this.currentGame.lives = this.decrementLives(this.currentGame.lives);
        }
        break;

      case this.GameType.TRIPLE_QUESTION:
        if (evtTargetParent.classList.contains(`game__option--selected`)) {
          this.setStatisticsResult(this.AnswerQuality.CORRECT);
        } else {
          this.setStatisticsResult(this.AnswerQuality.WRONG);
          this.currentGame.lives = this.decrementLives(this.currentGame.lives);
        }
        break;
    }
  }
}
