import React from "react";
import MovieCard from "./MovieCard";

const SearchMovieList = ({ title, posterPath }) => {
  return (
    <div className="mb-6">
      <h1 className="text-white text-2xl font-semibold mb-4">{title}</h1>
      <div className="flex flex-wrap">
        <MovieCard poster_path={posterPath} />
      </div>
    </div>
  );
};

export default SearchMovieList;



