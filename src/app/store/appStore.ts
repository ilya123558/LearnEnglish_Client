import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { contentAPI } from "@/entities/content/api/content.api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(contentAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch