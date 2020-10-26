import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  goBlack,
  goGray,
  selectSquareColor,
  selectSquareNextColor,
  selectSquareNextTime,
  selectSquareStarted,
  squareStop,
} from "../ReduxStore/squareSlice";
import GlobalTimer from "../GlobalTimer";
import store from "../ReduxStore/store";
import { resultDialogShow } from "../ReduxStore/resultDialogSlice";
import GrayBox from "./GrayBox";
import BlackBox from "./BlackBox";
const Square = (props) => {
  const started = useSelector(selectSquareStarted);
  const color = useSelector(selectSquareColor);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      // console.log("Square timeout");
      const nextTime = selectSquareNextTime(store.getState());
      const nextColor = selectSquareNextColor(store.getState());
      const currentTime = GlobalTimer.instance().time();
      if (currentTime >= 1800 && GlobalTimer.instance().isCounting()) {
        dispatch(squareStop());
        dispatch(resultDialogShow());
      }

      if (nextTime <= currentTime) {
        switch (nextColor) {
          case "gray":
            dispatch(goGray());
            break;
          case "black":
            dispatch(goBlack());
            break;
          default:
            break;
        }
      }
    }, 250);
  }, [dispatch]);

  return started ? color === "black" ? <BlackBox /> : <GrayBox /> : "";
};

Square.propTypes = {};

export default Square;
