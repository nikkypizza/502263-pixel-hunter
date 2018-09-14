import {assert} from 'chai';
import StatsView from '../views/stats-view.js';
import GameModel from '../model/game-model.js';

const model = new GameModel(`me`);
const statsView = new StatsView(model.currentGame, true, model.currentGame.statistics);

const MAX_LIVES = 3;
const mockQuestionsArr = (minAnswerTime, maxArrElements = 10) => {
  const questionsArr = [];
  for (let i = 0; i < maxArrElements; i++) {
    const questionsArrEl = {
      isCorrect: true,
      answerTime: minAnswerTime + i
    };
    questionsArr.push(questionsArrEl);
  }
  return questionsArr;
};

describe(`getGamePoints()`, () => {
  describe(`Max And Min Points With 3 Lives`, () => {
    it(`return 650 if all answers are slow`, () => {
      assert.equal(650, statsView.getGamePoints(mockQuestionsArr(0), MAX_LIVES));
    });
    it(`return 1150 if all answers are neither fast nor slow`, () => {
      assert.equal(1150, statsView.getGamePoints(mockQuestionsArr(10), MAX_LIVES));
    });
    it(`return 1650  if all answers are fast`, () => {
      assert.equal(1650, statsView.getGamePoints(mockQuestionsArr(21), MAX_LIVES));
    });
  });
});
