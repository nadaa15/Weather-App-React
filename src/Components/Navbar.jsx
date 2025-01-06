import React, { useEffect, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByLocation, getWeatherBySearch } from "../Redux/WeatherSlice";
import toast from "react-hot-toast";
import { Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: alpha(theme.palette.common.white, 0.50),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

export default function Navbar() {
  const dispatch = useDispatch()
        const { error } = useSelector((state) => state.weather);
  const [searchValue, setsearchValue] =useState("")
  const [cityError, setcityError] =useState(false)



  function handleSearch(term) {
   setcityError(false)
   setsearchValue(term.trim());
   dispatch(getWeatherBySearch(term));
 }

  useEffect(() => {
    if (error) {
      if (error === "Parameter q is missing.") {
        setcityError(false)
               navigator.geolocation.getCurrentPosition((position) => {
                 const { latitude, longitude } = position.coords;
                 dispatch(getWeatherByLocation({ latitude, longitude }));
               });
      } else if (error === "No matching location found.") {
        setcityError(true)
      } else {
        setcityError(false)
        toast.error("An unexpected error occurred.");
      }
    }
  }, [error])
  
 
  
  

  return (
    <Box sx={{ mb: "40px" }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: "none", pt: 2 }}
      >
        <Toolbar sx={{display:"flex", flexDirection:"column", gap:2}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for your preferred city…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </Search>
          {cityError?<Typography
            sx={{ color: "#b00", fontWeight: "600" }}
          >
            No matching location found. Please try again.
          </Typography>:null}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
