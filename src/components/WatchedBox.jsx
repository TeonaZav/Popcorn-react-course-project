import React, { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import MovieDetails from "./MovieDetails";

const WatchedBox = ({
  watched,
  selectedId,
  onAddWatched,
  onCloseMovie,
  onDeleteWatched,
}) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      {selectedId && watched ? (
        <MovieDetails
          selectedId={selectedId}
          onCloseMovie={onCloseMovie}
          onAddWatched={onAddWatched}
          watched={watched}
        />
      ) : (
        <>
          {/* <WatchedSummary watched={watched} /> */}
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && watched && (
            <>
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={onDeleteWatched}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WatchedBox;
