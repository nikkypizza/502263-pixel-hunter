import {currentGame} from '../utils/changeLevel.js';
import getGamePoints from '../utils/getGamePoints.js';

const statsTemplate = (statsNodesArr, isFail) => {
  if (isFail) {
    return `
    <header class="header">
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>
    </header>
    <section class="result">
      <h2 class="result__title">Проигрыш</h2>
      <table class="result__table">
        <tr>
          <td class="result__number"></td>
          <td>
            <ul class="stats">
              ${statsNodesArr.join(``)}
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
    </section>
    `;
  }
  let trueAnswers = currentGame.answers.filter((answer) => {
    return answer.answerIsTrue;
  });
  let fastAnswers = currentGame.answers.filter((answer) => {
    return answer.quality === `fast` && answer.answerIsTrue;
  });
  let slowAnswers = currentGame.answers.filter((answer) => {
    return answer.quality === `slow` && answer.answerIsTrue;
  });

  return `
  <header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="result">
    <h2 class="result__title">Победа!</h2>
    <table class="result__table">
      <tr>
        <td class="result__number"></td>
        <td colspan="2">
          <ul class="stats">
            ${statsNodesArr.join(``)}
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${trueAnswers.length * 100}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${fastAnswers.length}<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${fastAnswers.length * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${currentGame.lives}<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">+ ${currentGame.lives * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${slowAnswers.length}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">- ${slowAnswers.length * 50}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getGamePoints(currentGame.answers, currentGame.lives)}</td>
      </tr>
    </table>
  </section>
    `;
};

export default statsTemplate;
