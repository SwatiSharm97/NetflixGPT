// import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useMovieTrailer from "../utilis/customHook/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  // const MovieTrailer = useSelector((store) => store.movies?.MoviesTrailer);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/qqrpMRDuPfc?si=" +
          movieId +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullScreen
      ></iframe>
    </div>
  );
};
VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VideoBackground;
