// src/store/weatherSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "32356d85553c4159b3135741251802";
const initialState = {
  weather: null,
  loading: false,
  error: null,
};

export const getWeatherByLocation = createAsyncThunk(
  "weather/getWeatherByLocation",
  async ({ latitude, longitude }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=5`
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);


export const getWeatherBySearch = createAsyncThunk(
  "weather/fetchWeatherBySearch",
  async (term, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${term}&days=5`
        );
      return response.data;
    } catch (error) {      
      return rejectWithValue(
        error.response?.data.error.message || "Something went wrong"
      );
    }
  }
);

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherByLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeatherByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(getWeatherByLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getWeatherBySearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeatherBySearch.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(getWeatherBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default WeatherSlice.reducer;
