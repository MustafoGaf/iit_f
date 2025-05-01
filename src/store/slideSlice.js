import { createSlice } from "@reduxjs/toolkit";
import { getSliders } from "../api/sliders";
export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    data: {
      message: "Ok",
      data: [
        {
          id: 1,
          link: "/img/slider1.jpg",
          image: "/img/slider1.jpg",
          title_ru:
            "ПРЕПОДАВАТЕЛИ ТНУ ЗАВОЕВАЛИ 3 МЕДАЛИ НА ФОРУМЕ ИЗОБРЕТАТЕЛЕЙ БЛИЖНЕГО ВОСТОКА",
          title_en:
            "TNU PROFESSORS WON 3 MEDALS AT THE MIDDLE EAST INVENTORS FORUM",
          title_tj:
            "УСТОДОНИ ДМТ АЗ ФОРУМИ ИХТИРОЪКОРОНИ ХОВАРИ МИЁНА 3 МЕДАЛ БА ДАСТ ОВАРДАНД",
          created_at: "2025-05-01T09:30:25.942Z",
          order_number: 1,
        },
      ],
    },

    loading: false,
    error: false,
  },
  reducers: {
    addImage: (state) => {
      state.image = "newImage";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSliders.pending, (state) => {
      state.loading = true;
      state.error = false;
    }),
      builder.addCase(getSliders.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
      builder.addCase(getSliders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      });
  },
});
export const { addImage } = sliderSlice.actions;
export default sliderSlice.reducer;
