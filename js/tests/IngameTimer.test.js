import {assert} from 'chai';
import IngameTimer from '../utils/ingame-timer.js';

let callbackState = `not active`;
const sayHello = function () {
  callbackState = `active`;
};

const mockTimer = new IngameTimer(2, sayHello);

describe(`IngameTimer()`, () => {
  it(`set time to given value`, () => {
    assert.equal(2, mockTimer.time);
  });
  it(`decrement time on tick()`, () => {
    assert.equal(1, mockTimer.tick());
  });
  it(`trigger callback if time = 0`, () => {
    assert.equal(`not active`, callbackState);
    mockTimer.tick();
    mockTimer.tick();
    assert.equal(`active`, callbackState);
  });
});
