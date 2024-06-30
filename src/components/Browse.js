import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const ShowgptSerach = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {ShowgptSerach ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
