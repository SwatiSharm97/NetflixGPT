import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    MoviesTrailer: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    MoviesTrailer: (state, action) => {
      state.MoviesTrailer = action.payload.results.filter(
        (video) => video.name === "Official Trailer"
      );
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },

    addUpcomingMovie: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  MoviesTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
