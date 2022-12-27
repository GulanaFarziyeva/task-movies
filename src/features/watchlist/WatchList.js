import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";

import { fetchMovies } from "./watchlistSlice";
import WatchlistItem from "./WatchListItem";
import { destroyModal } from "../modals/Modal";

const Watchlist = () => {
  const movies = useSelector((state) => state.movies.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <ul className="watchlist">
      <FaRegTimesCircle
        className="watchlist__close-btn"
        onClick={destroyModal}
      />
      {movies.map((movie, index) => (
        <WatchlistItem key={index} movie={movie} />
      ))}
    </ul>
  );
};

export default Watchlist;
