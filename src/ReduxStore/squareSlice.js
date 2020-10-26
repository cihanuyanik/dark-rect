import { createSlice } from "@reduxjs/toolkit";
import GlobalTimer from "../GlobalTimer";
import { randomInt, randomIntGauss } from "../utils";

const getInitialState = () => {
  return {
    color: "gray",
    nextColor: "gray",
    started: false,
    nextTime: 2,
    totalDisplayedBlack: 0,
    correctBlackSeenAnswer: 0,
    wrongBlackSeenAnswer: 0,
    blackSeenResponseTimeRange: [0, 0],
  };
};

export const squareSlice = createSlice({
  name: "square",
  initialState: getInitialState(),

  reducers: {
    squareRestart: (state, action) => {
      GlobalTimer.instance().start();

      const newState = getInitialState();
      newState.started = true;
      return newState;
    },
    squareStop: (state, action) => {
      GlobalTimer.instance().stop();
      state.started = false;
    },

    goGray: (state, action) => {
      state.color = "gray";
      state.nextColor = "black";
      state.nextTime =
        GlobalTimer.instance().time() + randomIntGauss(5, 200, 3);

      // state.nextTime = GlobalTimer.instance().time() + randomInt(20, 101);
    },
    goBlack: (state, action) => {
      state.color = "black";
      state.nextColor = "gray";
      const cTime = GlobalTimer.instance().time();
      state.nextTime = cTime + 0.5;

      state.blackSeenResponseTimeRange = [cTime, cTime + 1.5];
      state.totalDisplayedBlack++;
    },

    blackSeen: (state, action) => {
      const cTime = GlobalTimer.instance().time();
      if (
        state.blackSeenResponseTimeRange[0] <= cTime &&
        cTime <= state.blackSeenResponseTimeRange[1]
      ) {
        state.correctBlackSeenAnswer++;
      } else {
        state.wrongBlackSeenAnswer++;
      }
    },
  },
});

export const {
  squareRestart,
  squareStop,
  goGray,
  goBlack,
  blackSeen,
} = squareSlice.actions;

export const selectSquareStarted = (state) => state.square.started;
export const selectSquareColor = (state) => state.square.color;
export const selectSquareNextColor = (state) => state.square.nextColor;
export const selectSquareNextTime = (state) => state.square.nextTime;

export const selectTotalDisplayedBlack = (state) =>
  state.square.totalDisplayedBlack;
export const selectCorrectBlackSeenAnswer = (state) =>
  state.square.correctBlackSeenAnswer;
export const selectWrongBlackSeenAnswer = (state) =>
  state.square.wrongBlackSeenAnswer;

export default squareSlice.reducer;
