import Timer from "./Timer";

class GlobalTimer {
  static _instance = null;
  static instance() {
    if (this._instance === null) {
      this._instance = new GlobalTimer();
    }
    return this._instance;
  }

  _timer = null;
  constructor() {
    this._timer = new Timer();
  }

  start() {
    this._timer.start();
  }

  stop() {
    this._timer.stop();
  }

  time() {
    return this._timer.second;
  }
}

export default GlobalTimer;
