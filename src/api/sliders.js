import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSliders = createAsyncThunk("sliger/getSlider", async () => {
  try {
    const response = await fetch("https://apiiit.vercel.app/sliders");
    const data = await response.json();
    return data;
  } catch (error) {}
});
