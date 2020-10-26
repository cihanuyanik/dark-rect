import React, { useEffect, useState } from "react";
import styles from "./Square.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  goBlack,
  goGray,
  goNextColor,
  goWhite,
  selectSquareColor,
  selectSquareNextColor,
  selectSquareNextTime,
} from "../ReduxStore/squareSlice";
import Timer from "../Timer";
import GlobalTimer from "../GlobalTimer";
import store from "../ReduxStore/store";
const Square = (props) => {
  const color = useSelector(selectSquareColor);
  // const nextColor = useSelector(selectSquareNextColor);
  // const nextTime = useSelector(selectSquareNextTime);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      const nextTime = selectSquareNextTime(store.getState());
      const nextColor = selectSquareNextColor(store.getState());

      if (nextTime <= GlobalTimer.instance().time()) {
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
        }
      }
    }, 1000);
  }, []);

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
