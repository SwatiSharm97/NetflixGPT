import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { MoviesTrailer } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
    const MovieTrailerDistaptch= useDispatch()
    useEffect(() => {
        getMovieVideo();
      }, []);
      const getMovieVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const movies = await data.json();
    
        MovieTrailerDistaptch(MoviesTrailer(movies));
      };

};

export default useMovieTrailer;
