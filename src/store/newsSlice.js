import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "../api/sliders";
export const newsSlider = createSlice({
  name: "news",
  initialState: {
    data: {
      message: "Ok",
      data: [
        {
          id: 90001,
          image: "/img/news1.jpg",
          create_at: "21.12.2025",
          title_ru:
            "ТОРЖЕСТВЕННОЕ ОТМЕЧАНИЕ ГОДОВЩИНЫ СОЗДАНИЯ ВООРУЖЕННЫХ СИЛ В ТНУ",
          title_en:
            "GRAND CELEBRATION OF THE ARMED FORCES FOUNDATION ANNIVERSARY AT TNU",
          title_tj: "ТАҶЛИЛИ БОШУКУҲИ ТАЪСИСЁБИИ ҚУВВАҲОИ МУСАЛЛАҲ ДАР ДМТ",
          desc_ru:
            "Сегодня (21.02.2025) в честь 32-й годовщины создания Вооружённых Сил Республики Таджикистан в Национальном университете Таджикистана прошёл научно-культурный форум.",
          desc_en:
            "Today (21.02.2025), on the occasion of the 32nd anniversary of the establishment of the Armed Forces of the Republic of Tajikistan, a scientific and cultural event was held at the Tajik National University.",
          desc_tj:
            "Имрӯз (21.02.2025) бахшида ба 32-юмин солгарди таъсисёбии Қувваҳои Мусаллаҳи Ҷумҳурии Тоҷикистон дар Донишгоҳи миллии Тоҷикистон ҳамоиши илмӣ - фарҳангӣ баргузор гардид.",
          order_number: 1,
          is_active: true,
        },
        {
          id: 90002,
          image: "/img/news1.jpg",
          create_at: "21.12.2025",
          title_ru:
            "ТОРЖЕСТВЕННОЕ ОТМЕЧАНИЕ ГОДОВЩИНЫ СОЗДАНИЯ ВООРУЖЕННЫХ СИЛ В ТНУ",
          title_en:
            "GRAND CELEBRATION OF THE ARMED FORCES FOUNDATION ANNIVERSARY AT TNU",
          title_tj: "ТАҶЛИЛИ БОШУКУҲИ ТАЪСИСЁБИИ ҚУВВАҲОИ МУСАЛЛАҲ ДАР ДМТ",
          desc_ru:
            "Сегодня (21.02.2025) в честь 32-й годовщины создания Вооружённых Сил Республики Таджикистан в Национальном университете Таджикистана прошёл научно-культурный форум.",
          desc_en:
            "Today (21.02.2025), on the occasion of the 32nd anniversary of the establishment of the Armed Forces of the Republic of Tajikistan, a scientific and cultural event was held at the Tajik National University.",
          desc_tj:
            "Имрӯз (21.02.2025) бахшида ба 32-юмин солгарди таъсисёбии Қувваҳои Мусаллаҳи Ҷумҳурии Тоҷикистон дар Донишгоҳи миллии Тоҷикистон ҳамоиши илмӣ - фарҳангӣ баргузор гардид.",
          order_number: 1,
          is_active: false,
        },
        {
          id: 90003,
          image: "/img/news1.jpg",
          create_at: "21.12.2025",
          title_ru:
            "ТОРЖЕСТВЕННОЕ ОТМЕЧАНИЕ ГОДОВЩИНЫ СОЗДАНИЯ ВООРУЖЕННЫХ СИЛ В ТНУ",
          title_en:
            "GRAND CELEBRATION OF THE ARMED FORCES FOUNDATION ANNIVERSARY AT TNU",
          title_tj: "ТАҶЛИЛИ БОШУКУҲИ ТАЪСИСЁБИИ ҚУВВАҲОИ МУСАЛЛАҲ ДАР ДМТ",
          desc_ru:
            "Сегодня (21.02.2025) в честь 32-й годовщины создания Вооружённых Сил Республики Таджикистан в Национальном университете Таджикистана прошёл научно-культурный форум.",
          desc_en:
            "Today (21.02.2025), on the occasion of the 32nd anniversary of the establishment of the Armed Forces of the Republic of Tajikistan, a scientific and cultural event was held at the Tajik National University.",
          desc_tj:
            "Имрӯз (21.02.2025) бахшида ба 32-юмин солгарди таъсисёбии Қувваҳои Мусаллаҳи Ҷумҳурии Тоҷикистон дар Донишгоҳи миллии Тоҷикистон ҳамоиши илмӣ - фарҳангӣ баргузор гардид.",
          order_number: 1,
          is_active: true,
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
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
      state.error = false;
    }),
      builder.addCase(getNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      }),
      builder.addCase(getNews.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const { addImage } = newsSlider.actions;
export default newsSlider.reducer;
