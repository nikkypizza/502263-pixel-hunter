const IngameTimer = function (time, callback) {
  this.time = time;
  this.tick = () => {
    if (this.time > 0) {
      this.time -= 1;
    } else {
      callback();
    }
    return this.time;
  };
};

export default IngameTimer;
