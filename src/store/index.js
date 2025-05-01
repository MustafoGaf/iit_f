import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slideSlice";

export default configureStore({
  reducer: {
    slider: sliderSlice,
  },
});
