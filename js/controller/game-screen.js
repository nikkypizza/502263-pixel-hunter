import changeView from '../utils/change-view.js';
import HeaderView from '../views/header-view.js';
import {INITIAL_GAME} from '../utils/change-level.js';
import {GAME_DATA} from '../data/game-data.js';
import GameSingleView from '../views/game-single-view.js';
import GameDoubleView from '../views/game-double-view.js';
import GameTripleView from '../views/game-triple-view.js';

const screenContainer = document.createElement(`div`);

export default class GameScreen {
  constructor(model) {
    this.model = model;
    // Инициализация и настройка игры

  }

  // stopGame() {
  //   // Остановка игры
  // }

  startGame() {
    const gameTypes = {
      singleQuestion: new GameSingleView(GAME_DATA[this.model._state.level]),
      doubleQuestion: new GameDoubleView(GAME_DATA[this.model._state.level]),
      tripleQuestion: new GameTripleView(GAME_DATA[this.model._state.level])
    };

    const header = new HeaderView(INITIAL_GAME, this.model._state);
    const currentGameType = gameTypes[GAME_DATA[this.model._state.level].type];

    screenContainer.innerHTML = ``;
    screenContainer.appendChild(header.element);
    screenContainer.appendChild(currentGameType.element);
    changeView(screenContainer);
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

  // changeLevel() {
  //   // Обновление текщего уровня
  // }


  // endGame(win, canContinue) {
  //   // Проигрыш игрока
  // }

  // _changeContentView(view) {
  //   // Вспомогательный внутренний метод
  // }
}
