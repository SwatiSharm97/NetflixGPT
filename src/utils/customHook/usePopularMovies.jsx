import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

const usePopulargMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const movieList = await data.json();

    dispatch(addPopularMovies(movieList));
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};
export default usePopulargMovies;
