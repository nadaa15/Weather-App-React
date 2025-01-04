import * as React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; 
import sunrise from "../assets/images/sunrise-white 1.png";
import sunset from "../assets/images/sunset-white 1.png";
import humidity from "../assets/images/humidity 1.png";
import wind from "../assets/images/wind 1.png";
import pressure from "../assets/images/pressure 1.png";
import uv from "../assets/images/uv 1.png";
import { useSelector } from "react-redux";

export default function WeatherDetails() {
        const { weather } = useSelector(
          (state) => state.weather
        );

  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: "30px",
        boxShadow: "8px 10px 2px gray",
        px: 3,
      }}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ flexGrow: 1 }}
          justifyContent="space-around"
          alignItems="center"
        >
          {/* First Column */}
          <Grid xs={12} sm={4}>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ xs: 6, sm: 4 }}
              sx={{ textAlign: "center" }}
            >
              <Box>
                <Typography variant="h3" color="text.primary">
                  {Math.floor(weather?.current?.temp_c)}°C
                </Typography>
                <Typography color="text.secondary">
                  Feels Like: {Math.floor(weather?.current?.feelslike_c)}°C
                </Typography>
              </Box>
              <Box>
                <Stack
                  sx={{ marginBottom: "20px" }}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  <Box sx={{ width: 30, height: 30 }}>
                    <img
                      src={sunrise}
                      alt="Sunrise icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "14px" }} color="text.primary">
                      Sunrise
                    </Typography>
                    <Typography
                      sx={{ fontSize: "10px" }}
                      color="text.secondary"
                    >
                      {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 30, height: 30 }}>
                    <img
                      src={sunset}
                      alt="Sunset icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "14px" }} color="text.primary">
                      sunset
                    </Typography>
                    <Typography
                      sx={{ fontSize: "10px" }}
                      color="text.secondary"
                    >
                      {weather?.forecast?.forecastday[0]?.astro?.sunset}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Second Column */}
          <Grid xs={12} sm={4}>
            <Stack justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
              <Box sx={{ width: 100, height: 100 }}>
                <img
                  src={weather?.current?.condition?.icon}
                  alt="Sunrise icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography variant="h4" color="text.primary">
                {weather?.current?.condition?.text.split(" ")[0]}
              </Typography>
            </Stack>
          </Grid>

          {/* Third Column */}
          <Grid xs={12} sm={4}>
            <Grid container rowSpacing={2}>
              <Grid size={6}>
                <Box>
                  <Box sx={{ width: 40, height: 40, marginInline: "auto" }}>
                    <img
                      src={humidity}
                      alt="Humidity icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "700", my: 1 }}
                    color="text.primary"
                  >
                    {weather?.current?.humidity}%
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "600" }}
                    color="text.primary"
                  >
                    Humidity
                  </Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box>
                  <Box sx={{ width: 40, height: 40, marginInline: "auto" }}>
                    <img
                      src={wind}
                      alt="Wind Speed icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "700", my: 1 }}
                    color="text.primary"
                  >
                    {weather?.current?.wind_kph}k/h
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "600" }}
                    color="text.primary"
                  >
                    Wind Speed
                  </Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box>
                  <Box sx={{ width: 40, height: 40, marginInline: "auto" }}>
                    <img
                      src={pressure}
                      alt="Pressure icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "700", my: 1 }}
                    color="text.primary"
                  >
                    {weather?.current?.pressure_mb}hPa
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "600" }}
                    color="text.primary"
                  >
                    Pressure
                  </Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box>
                  <Box sx={{ width: 40, height: 40, marginInline: "auto" }}>
                    <img
                      src={uv}
                      alt="UV icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "700", my: 1 }}
                    color="text.primary"
                  >
                    {weather?.current?.uv}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14", fontWeight: "600" }}
                    color="text.primary"
                  >
                    UV
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
