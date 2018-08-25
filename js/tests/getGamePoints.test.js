import {assert} from 'chai';
import getGamePoints from '../utils/getGamePoints.js';

const MAX_LIVES = 3;
const mockQuestionsArr = (minAnswerTime, maxArrElements = 10) => {
  let questionsArr = [];
  for (let i = 0; i < maxArrElements; i++) {
    let questionsArrEl = {
      answerIsTrue: true,
      answerTime: minAnswerTime + i
    };
    questionsArr.push(questionsArrEl);
  }
  return questionsArr;
};

describe(`getGamePoints()`, () => {
  describe(`1) Amount Of Questions`, () => {
    it(`fail game if player answered to less than 10 questions`, () => {
      assert.equal(-1, getGamePoints(mockQuestionsArr(0, 9)));
    });
  });
  describe(`2) Max And Min Points With 3 Lives`, () => {
    it(`return 1650 if all answers are fast`, () => {
      assert.equal(1650, getGamePoints(mockQuestionsArr(0), MAX_LIVES));
    });
    it(`return 1150 if all answers are neither fast nor slow`, () => {
      assert.equal(1150, getGamePoints(mockQuestionsArr(10), MAX_LIVES));
    });
    it(`return 650  if all answers are slow`, () => {
      assert.equal(650, getGamePoints(mockQuestionsArr(21), MAX_LIVES));
    });
  });
});
