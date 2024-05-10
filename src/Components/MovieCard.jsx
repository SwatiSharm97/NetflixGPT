import { IMAGE_URL } from "../utilis/constants";
import PropTypes from "prop-types";
const MovieCard = ({ postal_url }) => {
  return (
    <div className="w-52">
      <img className="" src={IMAGE_URL + postal_url} alt="movies" />
    </div>
  );
};

MovieCard.propTypes = {
  postal_url: PropTypes.object.isRequired,
};

export default MovieCard;
