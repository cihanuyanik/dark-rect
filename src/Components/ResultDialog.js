import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";

import store from "../ReduxStore/store";
import {
  selectCorrectBlackSeenAnswer,
  selectTotalDisplayCount,
  selectTotalDisplayedBlack,
  selectWrongBlackSeenAnswer,
} from "../ReduxStore/squareSlice";
import {
  resultDialogClose,
  selectResultDialogOpen,
} from "../ReduxStore/resultDialogSlice";
import { Typography } from "@material-ui/core";

export default function ResultDialog() {
  const open = useSelector(selectResultDialogOpen);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(resultDialogClose());
  };

  const displayCount = selectTotalDisplayCount(store.getState());
  const displayedBlackCount = selectTotalDisplayedBlack(store.getState());
  const correctBlackSeen = selectCorrectBlackSeenAnswer(store.getState());
  const wrongBlackSeen = selectWrongBlackSeenAnswer(store.getState());

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Alıştırma Sonucu"}</DialogTitle>
      <DialogContent>
        <Typography>{`Toplam gösterilen şekil: ${displayCount}`}</Typography>
        <Typography>{`Toplam gösterilen siyah: ${displayedBlackCount}`}</Typography>
        <Typography>{`Doğru cevaplanan siyah: ${correctBlackSeen}`}</Typography>
        <Typography>{`Siyah olmadığı halde siyah denilen: ${wrongBlackSeen}`}</Typography>
      </DialogContent>
    </Dialog>
  );
}
