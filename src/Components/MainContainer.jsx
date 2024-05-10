import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingMovie = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!nowPlayingMovie) return;

  const { original_title, overview, id } = nowPlayingMovie.results[0];

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
