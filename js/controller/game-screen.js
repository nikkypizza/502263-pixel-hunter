import changeView from '../utils/change-view.js';
import HeaderView from '../views/header-view.js';
import {INITIAL_GAME} from '../utils/change-level.js';
import {GAME_DATA} from '../data/game-data.js';
import {getGameStatisticsNodes} from '../utils/get-game-statistics.js';
import GameSingleView from '../views/game-single-view.js';
import GameDoubleView from '../views/game-double-view.js';
import GameTripleView from '../views/game-triple-view.js';
import Application from '../controller/application.js';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.screenContainer = document.createElement(`div`);
    this.ONE_SECOND = 200;
  }

  endGame() {
    Application.showStats(true);
    this.model.restart();
  }

  init() {
    this.startTimer();
    this.gameTypes = {
      singleQuestion: new GameSingleView(GAME_DATA[this.model.currentGame.level], getGameStatisticsNodes(this.model.currentGame).join(``)),
      doubleQuestion: new GameDoubleView(GAME_DATA[this.model.currentGame.level], getGameStatisticsNodes(this.model.currentGame).join(``)),
      tripleQuestion: new GameTripleView(GAME_DATA[this.model.currentGame.level], getGameStatisticsNodes(this.model.currentGame).join(``))
    };
    this.currentGameView = this.gameTypes[GAME_DATA[this.model.currentGame.level].type];
    const header = new HeaderView(INITIAL_GAME, this.model.currentGame);

    this.currentGameView.onAnswer = (evt) => {
      this.model.updateStats(this.currentGameView, evt);
      if (this.model.currentGame.lives <= 0) {
        this.stopTimer();
        this.endGame();
        return;
      }
      if (this.model.currentGame.lives > 0 && this.model.currentGame.level < GAME_DATA.length - 1) {
        this.model.nextLevel();
        this.stopTimer();
        this.init();
      } else {
        this.model.nextLevel();
        this.stopTimer();
        this.winGame();
      }
    };

    this.screenContainer.innerHTML = ``;
    this.screenContainer.appendChild(header.element);
    this.screenContainer.appendChild(this.currentGameView.element);
    changeView(this.screenContainer);
  }

  winGame() {
    Application.showStats();
    this.model.restart();
  }

  tick() {
    if (this.model.currentGame.time <= 0) {
      this.model.decrementLives();
      this.model.nextLevel();
      this.stopTimer();
      this.init();
    }
    if (this.model.currentGame.lives <= 0) {
      this.stopTimer();
      this.endGame();
      return;
    }
    this.model.currentGame.time--;
    this.updateHeader();
  }

  updateHeader() {
    let headerTimerNode = this.screenContainer.querySelector(`.game__timer`);
    headerTimerNode.innerHTML = this.model.currentGame.time;
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.tick();
      this.startTimer();
    }, this.ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.model.currentGame.time = this.model._state.time;
  }
}
