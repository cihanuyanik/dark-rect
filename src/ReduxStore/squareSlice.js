import { createSlice } from "@reduxjs/toolkit";
import GlobalTimer from "../GlobalTimer";
import { randomInt } from "../utils";

const getInitialState = () => {
  return {
    color: "white",
    nextColor: "gray",
    nextTime: 2,
    totalDisplayCount: 0,
    totalDisplayedBlack: 0,
    totalBlackSeenAnswer: 0,
    expectedBlackSeen: 0,
    correctBlackSeenAnswer: 0,
    wrongBlackSeenAnswer: 0,
  };
};

export const squareSlice = createSlice({
  name: "square",
  initialState: getInitialState(),

  reducers: {
    squareRestart: (state, action) => {
      GlobalTimer.instance().start();
      return getInitialState();
    },
    squareStop: (state, action) => {
      GlobalTimer.instance().stop();
    },
    goWhite: (state, action) => {
      state.color = "white";
      state.nextColor = "gray";
      state.nextTime = GlobalTimer.instance().time() + 2;
    },
    goGray: (state, action) => {
      state.color = "gray";
      state.expectedBlackSeen = 0;
      state.totalDisplayCount++;
      if (randomInt(0, 2) === 1) {
        // go black
        state.nextColor = "black";
        state.nextTime = GlobalTimer.instance().time() + randomInt(2, 5);
      } else {
        // do not go black
        state.nextColor = "white";
        state.nextTime = GlobalTimer.instance().time() + randomInt(2, 5) + 2;
      }
    },
    goBlack: (state, action) => {
      state.color = "black";
      state.nextColor = "white";
      state.nextTime = GlobalTimer.instance().time() + 1;
      state.expectedBlackSeen = 1;
      state.totalDisplayedBlack++;
    },

    blackSeen: (state, action) => {
      if (state.expectedBlackSeen === 1) {
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
  goWhite,
  goGray,
  goBlack,
  blackSeen,
} = squareSlice.actions;

export const selectSquareColor = (state) => state.square.color;
export const selectSquareNextColor = (state) => state.square.nextColor;
export const selectSquareNextTime = (state) => state.square.nextTime;
export const selectTotalDisplayCount = (state) =>
  state.square.totalDisplayCount;
export const selectTotalDisplayedBlack = (state) =>
  state.square.totalDisplayedBlack;
export const selectCorrectBlackSeenAnswer = (state) =>
  state.square.correctBlackSeenAnswer;
export const selectWrongBlackSeenAnswer = (state) =>
  state.square.wrongBlackSeenAnswer;

export default squareSlice.reducer;
