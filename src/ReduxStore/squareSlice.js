import { createSlice } from "@reduxjs/toolkit";
import GlobalTimer from "../GlobalTimer";
import { randomInt } from "../utils";

const getInitialState = () => {
  return {
    color: "white",
    nextColor: "gray",
    nextTime: 3,
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
    },
  },
});

export const {
  squareRestart,
  squareStop,
  goWhite,
  goGray,
  goBlack,
} = squareSlice.actions;

export const selectSquareColor = (state) => state.square.color;
export const selectSquareNextColor = (state) => state.square.nextColor;
export const selectSquareNextTime = (state) => state.square.nextTime;
export default squareSlice.reducer;
