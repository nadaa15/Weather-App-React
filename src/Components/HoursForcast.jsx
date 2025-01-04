import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HoursForcast() {
  const { weather } = useSelector((state) => state.weather);

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const hours = weather?.forecast?.forecastday[0]?.hour || [];
  const amHours = hours.filter((hour) => new Date(hour.time).getHours() < 12);
  const pmHours = hours.filter((hour) => new Date(hour.time).getHours() >= 12);

  const formatHour = (hour) => {
    const hourNum = new Date(hour.time).getHours();
    const suffix = hourNum < 12 ? "AM" : "PM";
    const formattedHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
    return `${formattedHour} ${suffix}`;
  };

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
        <Typography
          sx={{ mb: 6, fontWeight: 700 }}
          variant="h5"
        >
          Hourly Forecast
        </Typography>

        <Slider {...settings}>
          {amHours.map((hour, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: "linear-gradient(#ff8f00, #ffe082)",
                borderRadius: "30px",
                py: 3,
                px: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, mb: 3 }}
                variant="h6"
                color="text.primary"
              >
                {formatHour(hour)}
              </Typography>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  marginInline: "auto",
                }}
              >
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600 }}
                variant="h6"
                color="text.primary"
              >
                {Math.floor(hour.temp_c)}°C
              </Typography>
            </Box>
          ))}

          {pmHours.map((hour, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: "linear-gradient(#263238, #90a4ae)",
                borderRadius: "30px",
                py: 3,
                px: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, mb: 3 }}
                variant="h6"
                color="text.primary"
              >
                {formatHour(hour)}
              </Typography>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  marginInline: "auto",
                }}
              >
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600 }}
                variant="h6"
                color="text.primary"
              >
                {Math.floor(hour.temp_c)}°C
              </Typography>
            </Box>
          ))}
        </Slider>
      </CardContent>
    </Card>
  );
}
