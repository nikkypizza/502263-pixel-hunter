import {assert} from 'chai';
import {INITIAL_GAME, changeLevel} from '../utils/change-level.js';

describe(`changeLevel()`, () => {
  describe(`Check Level Changer`, () => {
    it(`should update game level`, () => {
      assert.equal(1, changeLevel(INITIAL_GAME, 1).level);
      assert.equal(4, changeLevel(INITIAL_GAME, 4).level);
      assert.equal(99, changeLevel(INITIAL_GAME, 99).level);
    });
  });
  describe(`Check Initial Game Status`, () => {
    it(`Game Starts With 3 lives, level 0, 30000 time`, () => {
      assert.equal(0, INITIAL_GAME.level);
      assert.equal(3, INITIAL_GAME.lives);
      assert.equal(30000, INITIAL_GAME.time);
    });
  });
  it(`should not accept strings as argument`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, `hello`).level, `Level should be of type number`);
    assert.throws(() => changeLevel(INITIAL_GAME, `hel${5 + 5}lo`).level, `Level should be of type number`);
  });
  it(`should not accept negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -5).level, `Level should not be a negative value`);
  });
});
