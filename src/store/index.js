import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slideSlice";
import newsSlider from "./newsSlice";

export default configureStore({
  reducer: {
    slider: sliderSlice,
    news: newsSlider,
  },
});
