import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const WatchlistItem = ({ movie }) => {
  return (
    <li className="watchlist__inner">
      <img
        className="watchlist__inner__img"
        alt={movie.title}
        src={movie.image}
      />
      <h5 className="watchlist__inner__title">{movie.title}</h5>
      <FaTimes className="watchlist__inner__close-btn" />
    </li>
  );
};

export default WatchlistItem;
