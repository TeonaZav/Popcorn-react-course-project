import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Logo from "./components/Logo.jsx";
import Search from "./components/Search.jsx";
import NumResult from "./components/NumResult.jsx";
import Main from "./components/Main.jsx";
import ListBox from "./components/ListBox.jsx";
import WatchedBox from "./components/WatchedBox.jsx";
import MovieList from "./components/MovieList.jsx";

import { tempMovieData } from "./data";
import { tempWatchedData } from "./data";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <div className="App">
      <NavBar>
        <Logo />
        <Search />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <ListBox element={<MovieList movies={movies} />} />
        {/* <ListBox>
          <MovieList movies={movies} />
        </ListBox> */}
        <WatchedBox watched={watched} />
      </Main>
    </div>
  );
}

export default App;
