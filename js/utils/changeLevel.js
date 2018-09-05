import IngameTimer from './IngameTimer.js';
import {STATS_DATA} from '../data/game-data.js';

const TIME_TO_ANSWER_MILLISECONDS = 30000;
let gameTimer = new IngameTimer(TIME_TO_ANSWER_MILLISECONDS);

const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: gameTimer.time,
  answers: [],
  statistics: STATS_DATA
});

let currentGame = Object.assign({}, INITIAL_GAME);

const changeLevel = (game, level) => {
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
};

export {INITIAL_GAME, currentGame, changeLevel};
