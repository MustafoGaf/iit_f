import { createAsyncThunk } from "@reduxjs/toolkit";
const API = import.meta.env.VITE_API_URL;

export const getSliders = createAsyncThunk(
  "sliger/getSlider",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API + "/sliders");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNews = createAsyncThunk(
  "sliger/getNews",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API + "/news");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
