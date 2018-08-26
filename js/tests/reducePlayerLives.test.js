import {assert} from 'chai';
import reducePlayerLives from '../utils/reducePlayerLives.js';

describe(`reducePlayerLives()`, () => {
  describe(`1) Reduce Player Lives`, () => {
    it(`decrement lives if player makes a mistake`, () => {
      assert.equal(2, reducePlayerLives(3));
      assert.equal(1, reducePlayerLives(2));
      assert.equal(0, reducePlayerLives(1));
      assert.equal(0, reducePlayerLives(`1`));
    });
  });
  describe(`2) Handle Error Cases`, () => {
    it(`return -1 if no lives left to reduce`, () => {
      assert.equal(-1, reducePlayerLives(0));
      assert.equal(-1, reducePlayerLives(-1));
      assert.equal(-1, reducePlayerLives(-15));
    });
    it(`return -1 if argument is set to > 3`, () => {
      assert.equal(-1, reducePlayerLives(4));
      assert.equal(-1, reducePlayerLives(44));
      assert.equal(-1, reducePlayerLives(100));
    });
    it(`return -1 if argument is a string`, () => {
      assert.equal(-1, reducePlayerLives(`hello`));
      assert.equal(-1, reducePlayerLives(`${1 + 2}, hello`));
    });
  });
});
