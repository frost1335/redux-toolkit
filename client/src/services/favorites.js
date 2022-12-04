import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAVORITE_KEY } from "../constants";

export const fetchUsers = createAsyncThunk("favorites/users", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return data;
});

const initialState = {
  favorites: JSON.parse(localStorage.getItem(FAVORITE_KEY) ?? "[]"),
  users: [],
  status: null,
  loading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addProduct(state, action) {
      const favorites = JSON.parse(localStorage.getItem(FAVORITE_KEY));
      if (!favorites?.find((product) => product._id === action.payload._id))
        state.favorites.push(action.payload);
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(state.favorites));
    },
    removeProduct(state, action) {
      state.favorites = state.favorites.filter((f) => f._id !== action.payload);
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(state.favorites));
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.status = "success";
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
