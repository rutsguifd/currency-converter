import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <CurrencyExchangeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Currency Converter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
