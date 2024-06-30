import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="px-6">
        <h1 className="text-white text-2xl font-semibold py-4">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
