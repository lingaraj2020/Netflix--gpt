import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies &&
    movies.PopularMovies &&
    movies.TopratedMovies &&
    movies.UpcomingMovies && (
      <div className="bg-black">
        <div className="mt:0 md:-mt-52 pl-2 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies?.TopratedMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies?.PopularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.UpcomingMovies}
          />
          <MovieList
            title={"New on Netflix"}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
