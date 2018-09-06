const statsAnswerTypeMap = {
  correct: `<li class="stats__result stats__result--correct"></li>`,
  fast: `<li class="stats__result stats__result--fast"></li>`,
  slow: `<li class="stats__result stats__result--slow"></li>`,
  wrong: `<li class="stats__result stats__result--wrong"></li>`,
  unknown: `<li class="stats__result stats__result--unknown"></li>`,
};

const getGameStatisticsNodes = (data) => {
  const gameStatsArr = [];
  data.forEach((el) => {
    gameStatsArr.push(statsAnswerTypeMap[el]);
  });

  return gameStatsArr;
};

export {statsAnswerTypeMap, getGameStatisticsNodes};
