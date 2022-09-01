import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../services/favorites";
import { productApi } from "../services/productApi";

export default configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    favoritesState: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
