import Utils from '../utils/utils.js';
import {GAME_DATA} from '../data/game-data.js';
import {serverData} from '../controller/application.js';
import HeaderView from '../views/header-view.js';
import GameSingleView from '../views/game-single-view.js';
import GameDoubleView from '../views/game-double-view.js';
import GameTripleView from '../views/game-triple-view.js';
import ModalExitView from '../views/modal-exit-view.js';
import Application from '../controller/application.js';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.screenContainer = document.createElement(`div`);
    this.ONE_SECOND = 1000;
  }

  init() {
    const header = new HeaderView(this.model._state, this.model.currentGame);
    header.onClick = () => {
      clearInterval(this.timer);
      this.pauseGame();
    };
    this.currentGameView = null;
    switch (serverData[this.model.currentGame.level].type) {
      case this.model.GameType.SINGLE_QUESTION:
        this.currentGameView = new GameSingleView(serverData[this.model.currentGame.level], Utils.getGameStatisticsNodes(this.model.currentGame.statistics).join(``));
        break;
      case this.model.GameType.DOUBLE_QUESTION:
        this.currentGameView = new GameDoubleView(serverData[this.model.currentGame.level], Utils.getGameStatisticsNodes(this.model.currentGame.statistics).join(``));
        break;
      case this.model.GameType.TRIPLE_QUESTION:
        this.currentGameView = new GameTripleView(serverData[this.model.currentGame.level], Utils.getGameStatisticsNodes(this.model.currentGame.statistics).join(``));
        break;
    }

    this.startTimer();
    this.currentGameView.onAnswer = (evt) => {
      this.model.updateStats(this.currentGameView, evt);
      if (this.model.currentGame.lives < 0) {
        this.stopTimer();
        this.endGame();
        return;
      }
      if (this.model.currentGame.lives >= 0 && this.model.currentGame.level < GAME_DATA.length - 1) {
        GameScreen.changeLevel(this.model.currentGame.level, this.model.currentGame.level++);
        this.stopTimer();
        this.init();
      } else {
        GameScreen.changeLevel(this.model.currentGame.level, this.model.currentGame.level++);
        this.stopTimer();
        this.winGame();
      }
    };

    this.screenContainer.innerHTML = ``;
    this.screenContainer.appendChild(header.element);
    this.screenContainer.appendChild(this.currentGameView.element);
    this.headerTimerNode = this.screenContainer.querySelector(`.game__timer`);
    Utils.changeView(this.screenContainer);
  }

  updateHeader() {
    this.headerTimerNode.innerHTML = this.model.currentGame.time;
  }

  winGame() {
    Application.showStats();
    this.model.restart();
  }

  endGame() {
    Application.showStats(true);
    this.model.restart();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.tick();
    }, this.ONE_SECOND);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.model.currentGame.time = this.model._state.time;
  }

  tick() {
    if (this.model.currentGame.time <= 0) {
      this.model.currentGame.lives = this.model.decrementLives(this.model.currentGame.lives);
      GameScreen.changeLevel(this.model.currentGame.level, this.model.currentGame.level++);
      this.headerTimerNode.classList.remove(`game__timer--flash`);
      this.stopTimer();
      this.init();
    }
    if (this.model.currentGame.lives < 0) {
      this.stopTimer();
      this.endGame();
      return;
    }
    this.model.currentGame.time--;
    if (this.model.currentGame.time === 5) {
      this.headerTimerNode.classList.add(`game__timer--flash`);
    }
    this.updateHeader();
  }

  pauseGame() {
    const modalExit = new ModalExitView();
    modalExit.onModalClose = () => {
      Utils.removeNode(modalExit.element);
      this.startTimer();
    };
    Utils.appendNode(modalExit.element);
  }

  static changeLevel(game, level) {
    if (typeof level !== `number`) {
      throw new Error(`Level should be of type number`);
    }
    if (level < 0) {
      throw new Error(`Level should not be a negative value`);
    }

    const newGame = Object.assign({}, game, {
      level
    });
    return newGame;
  }
}
