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
import ErrorMessage from "./components/ErrorMessage.jsx";

import { tempMovieData } from "./data";
import { tempWatchedData } from "./data";

const KEY = "4b367d74";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const query = "interstellar";

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Something went wrong! please try again");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found!");

        setMovies(data.Search);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
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
          element={
            isLoading && !error ? (
              <Loader />
            ) : !isLoading && !error ? (
              <MovieList movies={movies} />
            ) : (
              <ErrorMessage message={error} />
            )
          }
        />
        <WatchedBox watched={watched} />
      </Main>
    </div>
  );
}

export default App;
