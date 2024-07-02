import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.language);
  const searchtext = useRef(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
  };

  const handlegptsearch = async () => {
    // console.log(searchtext.current.value);
    const movie = searchtext?.current?.value;
    console.log(movie);
    const result = await searchMovie(movie);
    console.log(result);

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   // TODO: Write Error Handling
    // }
    // console.log(gptResults.choices?.[0]?.message?.content);
    // // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
    // // For each movie I will search TMDB API
    // const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // // [Promise, Promise, Promise, Promise, Promise]
    // const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
  };

  return (
    <div>
      <div className="justify-center flex pt-[12%]">
        <form
          className="w-1/2 bg-black rounded-md flex items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchtext}
            type="text"
            className="flex-grow py-2 ml-4 px-4 bg-white border border-black rounded-md text-black"
            placeholder={lang[langkey].gptplaceholder}
          />
          <button
            className="py-2 px-6 bg-red-500 text-white rounded-lg m-4 hover:bg-red-700"
            onClick={handlegptsearch}
          >
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
