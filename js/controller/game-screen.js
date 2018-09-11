import changeView from '../utils/change-view.js';
import HeaderView from '../views/header-view.js';
import {INITIAL_GAME} from '../utils/change-level.js';
import {GAME_DATA} from '../data/game-data.js';
import {getGameStatisticsNodes} from '../utils/get-game-statistics.js';
import GameSingleView from '../views/game-single-view.js';
import GameDoubleView from '../views/game-double-view.js';
import GameTripleView from '../views/game-triple-view.js';

export default class GameScreen {
  constructor(model) {
    // Инициализация и настройка игры
    this.model = model;
    this.gameTypes = {
      singleQuestion: new GameSingleView(GAME_DATA[this.model._state.level], getGameStatisticsNodes(this.model._state).join(``)),
      doubleQuestion: new GameDoubleView(GAME_DATA[this.model._state.level], getGameStatisticsNodes(this.model._state).join(``)),
      tripleQuestion: new GameTripleView(GAME_DATA[this.model._state.level], getGameStatisticsNodes(this.model._state).join(``))
    };
    this.currentGameView = this.gameTypes[GAME_DATA[this.model._state.level].type];
    this.screenContainer = document.createElement(`div`);
  }

  // stopGame() {
  //   // Остановка игры
  // }

  init() {
    const header = new HeaderView(INITIAL_GAME, this.model._state);
    this.currentGameView.onAnswer = () => {
      this.model.nextLevel();
      this.changeLevel();
    };

    this.screenContainer.innerHTML = ``;
    this.screenContainer.appendChild(header.element);
    this.screenContainer.appendChild(this.currentGameView.element);
    changeView(this.screenContainer);
  }

  // answer(answer) {
  //   // Обработка ответа пользователя
  // }

  // restart(continueGame) {
  //   // Продолжение или сброс игры
  // }

  // exit() {
  //   // Выход из игры
  // }

  // updateHeader() {
  //   // Обновление статистики игрока
  // }

  changeLevel() {
    // Обновление текщего уровня
  }


  // endGame(win, canContinue) {
  //   // Проигрыш игрока
  // }

  // _changeContentView(view) {
  //   // Вспомогательный внутренний метод
  // }
}
