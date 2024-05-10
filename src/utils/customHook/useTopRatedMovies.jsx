import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const movieList = await data.json();

    dispatch(addTopRatedMovies(movieList));
  };
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
