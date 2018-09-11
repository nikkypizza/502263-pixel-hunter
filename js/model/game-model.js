import {INITIAL_GAME} from '../utils/change-level.js';
import {GAME_DATA} from '../data/game-data.js';
// import {changeLevel} from '../utils/change-level.js';
import reducePlayerLives from '../utils/reduce-player-lives.js';

const getLevel = (state) => GAME_DATA[state.level];

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  hasNextLevel() {
    return getLevel(this._state + 1) !== undefined;
  }

  nextLevel() {
    // if (this.hasNextLevel()) {
    //   changeLevel(this._state.level, this._state.level++)
    // }
  }

  decrementLives() {
    this._state.lives = reducePlayerLives(this._state.lives);
  }

  restart() {
    this._state = INITIAL_GAME;
  }

  updateStats() {}

  // tick() {
  //   this._state = tick(this._state);
  // }
}

