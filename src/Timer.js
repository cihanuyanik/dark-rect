class Timer {
  timerId = null;
  second = 0;
  start(timeOutFunc = null) {
    if (this.timerId !== null) {
      this.stop();
    }
    this.second = 0;
    this.timerId = setInterval(() => {
      this.second++;
      if (timeOutFunc !== null) timeOutFunc(this.second);
    }, 1000);
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

export default Timer;
