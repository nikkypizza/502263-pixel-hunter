import {assert} from 'chai';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
    it(`should return 0 when vaule 1 is searched for`, () => {
      assert.equal(0, [1, 2, 3].indexOf(1));
    });
  });
  describe(`#sort()`, () => {
    it(`sorted array should begin with 1`, () => {
      assert.equal(1, [8, 36, 4, 1, 28, 54, 3, 10].sort()[0]);
    });
  });
});
