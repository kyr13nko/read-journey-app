import { configureStore } from "@reduxjs/toolkit";

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { authReducer } from "./auth/authSlice";
import { booksReducer } from "./books/booksSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
