const IngameTimer = function (time, callback) {
  this.time = time;
  this.tick = () => {
    if (this.time > 0) {
      this.time--;
    } else {
      callback();
    }
    return this.time;
  };
};

export default IngameTimer;
