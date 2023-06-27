import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched &&
        watched.map((movie, i) => (
          <WatchedMovie
            movie={movie}
            key={`${movie.imdbID}/${i}`}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
    </ul>
  );
};

export default WatchedMoviesList;
