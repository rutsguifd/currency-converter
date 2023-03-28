import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ConverterAPI } from "./ConverterService";

const rootReducer = combineReducers({
  [ConverterAPI.reducerPath]: ConverterAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ConverterAPI.middleware),
  });
};
