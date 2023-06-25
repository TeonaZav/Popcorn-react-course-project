import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie, i) => (
        <WatchedMovie movie={movie} key={`${movie.imdbID}/${i}`} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
