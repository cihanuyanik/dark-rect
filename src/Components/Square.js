import React, { useEffect } from "react";
import styles from "./Square.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  goBlack,
  goGray,
  goWhite,
  selectSquareColor,
  selectSquareNextColor,
  selectSquareNextTime,
  squareStop,
} from "../ReduxStore/squareSlice";
import GlobalTimer from "../GlobalTimer";
import store from "../ReduxStore/store";
import { resultDialogShow } from "../ReduxStore/resultDialogSlice";
const Square = (props) => {
  const color = useSelector(selectSquareColor);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      const nextTime = selectSquareNextTime(store.getState());
      const nextColor = selectSquareNextColor(store.getState());
      const currentTime = GlobalTimer.instance().time();
      if (currentTime >= 60 && GlobalTimer.instance().isCounting()) {
        dispatch(squareStop());
        dispatch(resultDialogShow());
      }

      if (nextTime <= currentTime) {
        switch (nextColor) {
          case "white":
            dispatch(goWhite());
            break;
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
    }, 1000);
  }, [dispatch]);

  let squareClass;
  switch (color) {
    case "white":
      squareClass = styles.white;
      break;
    case "gray":
      squareClass = styles.gray;
      break;
    case "black":
      squareClass = styles.black;
      break;
    default:
      squareClass = styles.white;
  }

  return (
    <div className={squareClass} style={{ width: 150, height: 150 }}></div>
  );
};

Square.propTypes = {};

export default Square;
