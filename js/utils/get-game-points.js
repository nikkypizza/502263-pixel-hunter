const getGamePoints = (questionsArr, livesLeft) => {
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
        gamePoints += answerPointsMap.RIGHT_FAST_ANSWER; // Ответ быстрее 10 сек += 150 очков
      }
      if (el.answerTime >= answerTimeMap.MIN_TIME && el.answerTime <= answerTimeMap.MAX_TIME) {
        gamePoints += answerPointsMap.RIGHT_ANSWER; // Ответ между 10 и 20 сек += 100 очков
      }
      if (el.answerTime > answerTimeMap.MAX_TIME) {
        gamePoints += answerPointsMap.RIGHT_SLOW_ANSWER; // Ответ дольше 20 сек += 50 очков
      }
    }
  });

  gamePoints += livesLeft * answerPointsMap.EXTRA_LIFE; // По 50 очков за оставшуюся жизнь
  return gamePoints;
};

export default getGamePoints;
