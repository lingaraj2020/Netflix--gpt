import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstant";

const GptSearchBar = () => {
  const langkey=useSelector((store)=>store.config.language);

  return (
    <div>
      <div className="justify-center flex pt-[12%]">
        <form className="w-1/2 bg-black rounded-md flex items-center">
          <input
            type="text"
            className="flex-grow py-2 ml-4 px-4 bg-white border border-black rounded-md text-black"
            placeholder={lang[langkey].gptplaceholder}
          />
          <button className="py-2 px-6 bg-red-500 text-white rounded-lg m-4 hover:bg-red-700">
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
