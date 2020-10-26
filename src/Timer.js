class Timer {
  timerId = null;
  second = 0;
  start(timeOutFunc = null) {
    if (this.timerId !== null) {
      this.stop();
    }
    this.second = 0;
    this.timerId = setInterval(() => {
      this.second += 0.5;
      if (timeOutFunc !== null) timeOutFunc(this.second);
    }, 500);
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

export default Timer;
