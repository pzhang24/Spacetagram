import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Box p={2}>
        <Typography variant="h1" color="inherit" component="div">
          Spacetagram
        </Typography>
        <Typography variant="subtitle">
          A Collection of Images from NASA's APOD API
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
