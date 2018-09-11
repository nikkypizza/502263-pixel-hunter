import {INITIAL_GAME} from '../utils/change-level.js';
import {GAME_DATA} from '../data/game-data.js';

const getLevel = (state) => GAME_DATA[`${state.level}`];

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  // hasNextLevel() {
  //   return getLevel(this._state.level + 1) !== void 0;
  // }

  // nextLevel() {
  //   this._state = changeLevel(this._state, this._state.level + 1);
  // }

  // die() {
  //   this._state = die(this._state);
  // }

  restart() {
    this._state = INITIAL_GAME;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  // tick() {
  //   this._state = tick(this._state);
  // }
}
