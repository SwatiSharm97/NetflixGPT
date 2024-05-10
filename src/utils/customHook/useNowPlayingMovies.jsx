import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const movieList = await data.json();

    dispatch(addNowPlayingMovies(movieList));
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
