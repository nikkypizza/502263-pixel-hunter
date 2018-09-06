const reducePlayerLives = (currentLives) => {
  return currentLives > 0 && currentLives < 4 ? --currentLives : -1;
};

export default reducePlayerLives;
