import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./WeatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
