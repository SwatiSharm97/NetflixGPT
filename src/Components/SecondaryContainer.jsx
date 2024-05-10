import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovie) return;
  // if(!PopluarMovies) return;

  return (
    <div className=" bg-black">
      <div className=" -mt-52 ml-4 relative z-20 ">
        <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
