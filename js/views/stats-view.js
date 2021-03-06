import AbstractView from "./abstract-view.js";

export default class StatsView extends AbstractView {
  constructor(game, isFail, statsArr) {
    super();
    this.game = game;
    this.isFail = isFail;
    this.statsArr = statsArr;
  }
  get template() {
    if (this.isFail) {
      return `
      <section class="result">
        <h2 class="result__title">Проигрыш</h2>
        <table class="result__table">
          <tr>
            <td class="result__number"></td>
            <td>
              <ul class="stats">
                ${this.getGameStatisticsNodes(this.statsArr).join(``)}
              </ul>
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
      </section>
    `;
    }

    const correctAnswers = this.game.answers.filter((answer) => {
      return answer.isCorrect;
    });
    const fastAnswers = this.game.answers.filter((answer) => {
      return answer.isCorrect && answer.quality === `fast`;
    });
    const slowAnswers = this.game.answers.filter((answer) => {
      return answer.isCorrect && answer.quality === `slow`;
    });

    return `
    <section class="result">
      <h2 class="result__title">Победа!</h2>
      <table class="result__table">
        <tr>
          <td class="result__number"></td>
          <td colspan="2">
            <ul class="stats">
              ${this.getGameStatisticsNodes(this.statsArr).join(``)}
            </ul>
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total">${correctAnswers.length * 100}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${fastAnswers.length}<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">+ ${fastAnswers.length * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.game.lives}<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">+ ${this.game.lives * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${slowAnswers.length}<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">- ${slowAnswers.length * 50}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.getGamePoints(this.game.answers, this.game.lives)}</td>
        </tr>
      </table>
    </section>
    `;
  }

  getGamePoints(questionsArr, livesLeft) {
    const answerPointsMap = {
      RIGHT_ANSWER: 100,
      RIGHT_FAST_ANSWER: 150,
      RIGHT_SLOW_ANSWER: 50,
      EXTRA_LIFE: 50
    };
    const answerTimeMap = {
      MIN_TIME: 10,
      MAX_TIME: 20
    };
    let gamePoints = 0;

    // Test #1
    if (questionsArr.length < 10) {
      return -1;
    }
    // Test #2
    questionsArr.forEach((el) => {
      if (el.isCorrect) {
        if (el.answerTime < answerTimeMap.MIN_TIME) {
          gamePoints += answerPointsMap.RIGHT_SLOW_ANSWER; // Ответ дольше 20 сек += 50 очков
        }
        if (el.answerTime >= answerTimeMap.MIN_TIME && el.answerTime <= answerTimeMap.MAX_TIME) {
          gamePoints += answerPointsMap.RIGHT_ANSWER; // Ответ между 10 и 20 сек += 100 очков
        }
        if (el.answerTime > answerTimeMap.MAX_TIME) {
          gamePoints += answerPointsMap.RIGHT_FAST_ANSWER; // Ответ быстрее 10 сек += 150 очков
        }
      }
    });

    gamePoints += livesLeft * answerPointsMap.EXTRA_LIFE; // По 50 очков за оставшуюся жизнь
    return gamePoints;
  }

  getGameStatisticsNodes(data) {
    const statsAnswerTypeMap = {
      correct: `<li class="stats__result stats__result--correct"></li>`,
      fast: `<li class="stats__result stats__result--fast"></li>`,
      slow: `<li class="stats__result stats__result--slow"></li>`,
      wrong: `<li class="stats__result stats__result--wrong"></li>`,
      unknown: `<li class="stats__result stats__result--unknown"></li>`,
    };

    const gameStatsArr = [];
    data.forEach((el) => {
      gameStatsArr.push(statsAnswerTypeMap[el]);
    });

    return gameStatsArr;
  }

  bind() {}
}
