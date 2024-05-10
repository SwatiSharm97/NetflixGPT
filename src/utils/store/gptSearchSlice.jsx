import { createSlice } from "@reduxjs/toolkit";

const GptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    showPage: false,
    lang: "english",
  },
  reducers: {
    ShowGptPage: (state) => {
      state.showPage = !state.showPage;
    },
    ChangeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { ShowGptPage, ChangeLang } = GptSearch.actions;
export default GptSearch.reducer;
