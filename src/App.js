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
import { useMovies } from "./hooks/useMovies.js";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  function handleCloseMovie() {
    setSelectedId(null);
  }

  const handleWatchedMovie = (movie) => {
    setWatched((watchedMovie) => [...watchedMovie, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watchedMovie) =>
      watchedMovie.filter((movie) => movie.imdbID !== id)
    );
  };
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <div className="App">
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <ListBox
          element={
            isLoading && !error ? (
              <Loader />
            ) : !isLoading && !error ? (
              <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
            ) : (
              <ErrorMessage message={error} />
            )
          }
        />
        <WatchedBox
          watched={watched}
          selectedId={selectedId}
          onCloseMovie={handleCloseMovie}
          onAddWatched={handleWatchedMovie}
          onDeleteWatched={handleDeleteWatched}
        />
      </Main>
    </div>
  );
}

export default App;
