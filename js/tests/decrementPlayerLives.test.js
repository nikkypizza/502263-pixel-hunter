import {assert} from 'chai';
import GameModel from '../model/game-model.js';

const model = new GameModel(`me`);

describe(`decrementLives()`, () => {
  describe(`1) Reduce Player Lives`, () => {
    it(`decrement lives if player makes a mistake`, () => {
      assert.equal(2, model.decrementLives(3));
      assert.equal(1, model.decrementLives(2));
      assert.equal(0, model.decrementLives(1));
      assert.equal(0, model.decrementLives(`1`));
    });
  });
  describe(`2) Handle Error Cases`, () => {
    it(`return -1 if no lives left to reduce`, () => {
      assert.equal(-1, model.decrementLives(0));
      assert.equal(-1, model.decrementLives(-1));
      assert.equal(-1, model.decrementLives(-15));
    });
    it(`return -1 if argument is a string`, () => {
      assert.equal(-1, model.decrementLives(`hello`));
      assert.equal(-1, model.decrementLives(`${1 + 2}, hello`));
    });
  });
});
