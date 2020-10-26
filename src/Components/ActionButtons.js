import React, { useState } from "react";
import styles from "./ActionButtons.module.css";
import TableLayout, { ColumnDefinition, RowDefinition } from "./TableLayout";
import ImgGreen from "./green.png";
import ImgRed from "./red.png";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { blackSeen } from "../ReduxStore/squareSlice";

const ActionButtons = (props) => {
  const [imgSize, setImgSize] = useState(0);
  const dispatch = useDispatch();

  const onGreen = () => {
    dispatch(blackSeen());
  };

  const onRed = () => {};

  return (
    <TableLayout
      rows={[new RowDefinition()]}
      columns={[new ColumnDefinition(), new ColumnDefinition()]}
      cells={[
        [
          <div
            className={classnames(styles.container, styles.red)}
            ref={(el) => {
              if (!el) return;
              const bRect = el.getBoundingClientRect();
              const h = bRect.height;
              const w = bRect.width;
              if (h <= w) setImgSize(h);
              else setImgSize(w);
            }}
          >
            <img
              src={ImgRed}
              height={imgSize}
              width={imgSize}
              onClick={onRed}
              alt={"red"}
            />
            ,
          </div>,
          <div className={classnames(styles.container, styles.green)}>
            <img
              src={ImgGreen}
              height={imgSize}
              width={imgSize}
              onClick={onGreen}
              alt={"green"}
            />
            ,
          </div>,
        ],
      ]}
    />
  );
};

ActionButtons.propTypes = {};

export default ActionButtons;
