import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";




export default function CityCard() {
      const { weather } = useSelector((state) => state.weather);
  
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thuresday",
    "Friday",
    "Saterday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Box
      sx={{
        minWidth: 275,
      }}
    >
      <Card
        sx={{
          backgroundImage:
            "linear-gradient(rgba(256,256,256,.3), rgba(256,256,256,.3)) ,url(https://media.istockphoto.com/id/962500712/video/4k-tl-cloudy-sky-with-sun-rays.jpg?s=640x640&k=20&c=XQrz-Y4FIzovVlayePLhPZpHoM8-iLN7gZ_uSdnoe-8=)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "center",
          borderRadius: "30px",
          boxShadow: "8px 10px 2px gray",
          py: 4,
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 20,
              mb: 5,
              fontWeight: "700",
            }}
          >
            {weather?.location?.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ fontWeight: "800" }}
          >
            {weather?.location?.localtime.split(" ")[1]}
          </Typography>
          <Typography sx={{ color: "text.primary", fontSize: 12,fontWeight:"600" }}>
            {`${days[date.getDay()]}, ${date.getDate()} ${
              months[date.getMonth()]
            }`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
