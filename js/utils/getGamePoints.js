const getGamePoints = (questionsArr, livesLeft) => {
  const answerPointsMap = {
    rightAnswer: 100,
    rightFastAnswer: 150,
    rightSlowAnswer: 50,
    extraLife: 50
  };
  const answerTimeMap = {
    minTime: 10,
    maxTime: 20
  };
  let gamePoints = 0;

  // Тест #1
  if (questionsArr.length < 10) {
    return -1;
  }

  // Тест #2
  questionsArr.forEach((el) => {
    if (el.answerTime < answerTimeMap.minTime) {
      gamePoints += answerPointsMap.rightFastAnswer; // Ответ быстрее 10 сек += 150 очков
    }
    if (el.answerTime >= answerTimeMap.minTime && el.answerTime <= answerTimeMap.maxTime) {
      gamePoints += answerPointsMap.rightAnswer; // Ответ между 10 и 20 сек += 100 очков
    }
    if (el.answerTime > answerTimeMap.maxTime) {
      gamePoints += answerPointsMap.rightSlowAnswer; // Ответ дольше 20 сек += 50 очков
    }
  });

  gamePoints += livesLeft * answerPointsMap.extraLife; // По 50 очков за оставшуюся жизнь
  return gamePoints;
};

export default getGamePoints;
