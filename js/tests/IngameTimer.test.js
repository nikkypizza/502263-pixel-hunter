import {assert} from 'chai';
import IngameTimer from '../utils/IngameTimer.js';

const sayHello = () => {
  return `hello`;
};
const mockTimer = new IngameTimer(30000);
const mockTimer2 = new IngameTimer(0, sayHello);

describe(`IngameTimer()`, () => {
  it(`set time to 30 000 ms`, () => {
    assert.equal(30000, mockTimer.time);
  });
  it(`decrement time on tick()`, () => {
    assert.equal(29999, mockTimer.tick());
  });
  it(`trigger callback if time = 0`, () => {
    assert.equal(`hello`, mockTimer2.tick());
  });
});
