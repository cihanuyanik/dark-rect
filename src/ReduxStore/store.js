import { configureStore } from "@reduxjs/toolkit";
import squareReducer from "./squareSlice";
import resultDialogReducer from "./resultDialogSlice";
export default configureStore({
  reducer: {
    square: squareReducer,
    resultDialog: resultDialogReducer,
  },
});
