import {assert} from 'chai';
import getGamePoints from '../utils/getGamePoints.js';

const maxLives = 3;
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

describe(`#getGamePoints()`, () => {
  it(`#1 fail game if player answered to less than 10 questions`, () => {
    assert.equal(-1, getGamePoints(mockQuestionsArr(0, 9)));
  });
  it(`#2 return 1150 if all answers are neither fast nor slow and all lives are saved`, () => {
    assert.equal(1150, getGamePoints(mockQuestionsArr(10), maxLives));
  });
  it(`#2.1 return 1650 if all answers are fast and all lives are saved`, () => {
    assert.equal(1650, getGamePoints(mockQuestionsArr(0), maxLives));
  });
  it(`#2.2 return 650 if all answers are slow and all lives are saved`, () => {
    assert.equal(650, getGamePoints(mockQuestionsArr(21), maxLives));
  });
});
