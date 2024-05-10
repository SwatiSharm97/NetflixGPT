import { useRef } from "react";
import { BG_IMG_URL } from "../utilis/constants";
import { LANG } from "../utilis/constants";
import { useSelector } from "react-redux";
import openai from "../utilis/openaiAccess";

const SearchGpt = () => {
  const language = useSelector((store) => store.gptSearch.lang);
  const searchtext = useRef();

  const HandleSearchClick = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    console.log("=========", chatCompletion);
  };

  return (
    <div className=" w-full flex justify-center">
      <div className=" absolute -z-20">
        <img src={BG_IMG_URL} alt="logo" className="" />
      </div>
      <form
        className="bg-black  border-black border m-36 w-3/5 grid grid-cols-3 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          placeholder={LANG[language].text}
          type="text"
          className="p-4 m-4 col-span-2"
        ></input>
        <button
          className=" bg-red-600 font-bold p-4 m-4 rounded-lg text-white"
          onClick={HandleSearchClick}
        >
          {LANG[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchGpt;
