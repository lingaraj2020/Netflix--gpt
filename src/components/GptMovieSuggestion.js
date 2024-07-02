import React from "react";
import { useSelector } from "react-redux";
import SearchMovieList from "./SearchMovieList";

const GptMovieSuggestion = () => {
  const { movieResult } = useSelector((store) => store.gpt);

  if (movieResult === null || movieResult === undefined) {
    return null;
  }

  if (movieResult === 0) {
    return (
      <div className="text-white text-2xl font-semibold bg-black rounded-md border border-white mx-[400px] flex justify-center">
        Not getting results! Please provide a proper query.
      </div>
    );
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieResult.map((movie) => (
          <SearchMovieList
            key={movie.id}
            title={movie.original_title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
