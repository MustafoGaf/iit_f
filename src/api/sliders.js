import { createAsyncThunk } from "@reduxjs/toolkit";
const API = import.meta.env.VITE_API_URL;

export const getSliders = createAsyncThunk(
  "sliger/getSlider",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetch(API + "/sliders");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
