import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
// import { useRef } from "react";
const MovieList = ({ title, movies }) => {
  return (
    <div className=" pt-4  text-2xl ">
      <h1 className="font-bold text-white">{title}</h1>
      <div className="flex  overflow-x-scroll no-scrollbar ">
        <div className="flex items-center">
          <div className="flex gap-2 ">
            {movies?.results.map((movie, key) => (
              <MovieCard key={key} postal_url={movie.poster_path} />
            ))}
          </div>
          <span className="">scroll</span>
        </div>
      </div>
    </div>
  );
};
MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.object.isRequired,
};
export default MovieList;
