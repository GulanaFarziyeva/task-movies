import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const result = await axios
    .get("/db/watchlist.json")
    .then((response) => response.data);
  return result.movies;
});

export const watchlistSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default watchlistSlice.reducer;
