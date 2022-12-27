import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modals/modalSlice";
import watchlistSlice from "../features/watchlist/watchlistSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    movies: watchlistSlice,
  },
});

export default store;
