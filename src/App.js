import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import Logo from "./components/Logo.jsx";
import Search from "./components/Search.jsx";
import NumResult from "./components/NumResult.jsx";
import Main from "./components/Main.jsx";
import ListBox from "./components/ListBox.jsx";
import WatchedBox from "./components/WatchedBox.jsx";
import MovieList from "./components/MovieList.jsx";
import Loader from "./components/Loader.jsx";

import { tempMovieData } from "./data";
import { tempWatchedData } from "./data";

const KEY = "4b367d74";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);

  const query = "interstellar";

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <NavBar>
        <Logo />
        <Search />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <ListBox
          element={isLoading ? <Loader /> : <MovieList movies={movies} />}
        />
        <WatchedBox watched={watched} />
      </Main>
    </div>
  );
}

export default App;
