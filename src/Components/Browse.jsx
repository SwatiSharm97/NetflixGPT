import Header from "./Header";
import useNowPlayingMovies from "../utilis/customHook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulargMovies from "../utilis/customHook/usePopularMovies";
import useTopRatedMovies from "../utilis/customHook/useTopRatedMovies";
import useUpcomingMovie from "../utilis/customHook/useUpcomingMovie";
import SearchGpt from "./SearchGpt";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopulargMovies();
  useTopRatedMovies();
  useUpcomingMovie();
  const IsshowPage = useSelector((store) => store.gptSearch.showPage);

  return (
    <div className=" flex flex-col ">
      <Header />
      {IsshowPage ? (
        <SearchGpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
