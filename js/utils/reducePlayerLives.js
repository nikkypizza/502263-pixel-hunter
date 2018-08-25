const reducePlayerLives = (currentLives) => {
  // Исходя из макета стартовое количество жизней должно быть 3
  return currentLives > 0 && currentLives < 4 ? --currentLives : -1;
};

export default reducePlayerLives;
