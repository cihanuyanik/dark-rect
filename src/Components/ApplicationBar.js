import React from "react";
import styles from "./ApplicationBar.module.css";

import TableLayout, { ColumnDefinition, RowDefinition } from "./TableLayout";
import { Button, Typography } from "@material-ui/core";
import { RiRestartLine } from "react-icons/ri";
import classnames from "classnames";
import { MdGrade } from "react-icons/md";
import { useDispatch } from "react-redux";
import { squareRestart, squareStop } from "../ReduxStore/squareSlice";
import { resultDialogShow } from "../ReduxStore/resultDialogSlice";

const ApplicationBar = () => {
  const dispatch = useDispatch();
  const onStartClick = () => {
    dispatch(squareRestart());
  };

  const onFinishClick = () => {
    dispatch(squareStop());
    dispatch(resultDialogShow());
  };
  return (
    <TableLayout
      rows={[new RowDefinition()]}
      columns={[
        new ColumnDefinition({ width: 110 }),
        new ColumnDefinition(),
        new ColumnDefinition({ width: 110 }),
      ]}
      cells={[
        [
          <Button
            variant={"contained"}
            startIcon={<RiRestartLine />}
            className={classnames(styles.appBarBtn, styles.restart)}
            onClick={onStartClick}
          >
            <Typography>Başla</Typography>
          </Button>,
          <Typography className={styles.appBarTitle}>Kararan Kare</Typography>,
          <Button
            variant={"contained"}
            startIcon={<MdGrade />}
            className={classnames(styles.appBarBtn, styles.finish)}
            onClick={onFinishClick}
          >
            <Typography>Bitir</Typography>
          </Button>,
        ],
      ]}
    />
  );
};

export default ApplicationBar;
