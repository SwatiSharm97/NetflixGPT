import PropTypes from "prop-types";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="flex flex-col w-screen h-full mt-20 pt-[20%] pl-16  gap-2 absolute  bg-gradient-to-r from-black ">
      <span className="font-extrabold text-3xl text-white">{title}</span>
      <span className="w-1/4 text-white font-bold">{overview}</span>
      <span className="flex gap-2">
        <button className="px-5 py-1 bg-white hover:bg-opacity-70 text-black font-bold border rounded">
        ► Play
        </button>
        <button className="px-5 py-1 bg-gray-800 bg-opacity-50 hover:bg-opacity-10 text-white font-bold border rounded">ⓘ More Info</button>
      </span>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.object.isRequired,
  overview: PropTypes.object.isRequired,
};

export default VideoTitle;
