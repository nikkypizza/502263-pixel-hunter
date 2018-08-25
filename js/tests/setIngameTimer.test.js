import {assert} from 'chai';
import setIngameTimer from '../utils/setIngameTimer.js';

describe(`setIngameTimer()`, () => {
  it(`set time to 30 000 ms`, () => {
    assert.equal(30000, setIngameTimer());
  });
});
