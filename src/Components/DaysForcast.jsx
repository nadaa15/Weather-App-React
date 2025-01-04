import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import Grid from "@mui/material/Grid2";
import { useSelector } from 'react-redux';

export default function DaysForcast() {
  const { weather } = useSelector((state) => state.weather);


const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  };
  
  return (
    <>
      <Card
        sx={{
          textAlign: "center",
          borderRadius: "30px",
          boxShadow: "8px 10px 2px gray",
          px: 3,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontWeight: 700, mb: 2 }}
            variant="h5"
          >
            5 Days Forcast
          </Typography>
          {weather?.forecast?.forecastday.map((day, index) => (
            <Grid key={index} container spacing={{ xs: 2, lg: 4 }}>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    textAlign: "start",
                  }}
                  variant="h6"
                >
                  {formatDate(day.date)}
                </Typography>
              </Grid>

              <Grid size={3}>
                <Box sx={{ width: 40, height: 40, marginInline: "auto" }}>
                  <img
                    src={day.day.condition.icon}
                    alt={`${day.day.condition.text} icon`}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid size={3}>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 600 }}
                  variant="h6"
                >
                  {Math.floor(day.day.maxtemp_c)}°C/
                  {Math.floor(day.day.mintemp_c)}°C
                </Typography>
              </Grid>
            </Grid>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
