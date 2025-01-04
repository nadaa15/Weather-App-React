import { Box } from '@mui/material'
import Grid from "@mui/material/Grid2";
import React, { useEffect } from 'react'
import CityCard from './CityCard'
import WeatherDetails from './WeatherDetails';
import DaysForcast from './DaysForcast';
import HoursForcast from './HoursForcast';
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByLocation } from "../Redux/WeatherSlice";

export default function Home() {
   const dispatch = useDispatch();


   useEffect(() => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
         const { latitude, longitude } = position.coords;
         dispatch(getWeatherByLocation({ latitude, longitude }));
       });
     }
   }, [dispatch]);
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <CityCard />
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <WeatherDetails />
        </Grid>
      </Grid>
      <Grid container spacing={6} sx={{my:6}}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <DaysForcast />
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <HoursForcast />
        </Grid>
      </Grid>
    </Box>
  );
}
