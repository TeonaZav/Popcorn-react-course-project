import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import { tempMovieData } from "./data";
import { tempWatchedData } from "./data";
function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <div className="App">
      <NavBar movies={movies} />
      <Main movies={movies} watched={watched} />
    </div>
  );
}

export default App;
