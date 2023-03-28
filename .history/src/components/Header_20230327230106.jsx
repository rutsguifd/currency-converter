import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React from "react";
import { ConverterAPI } from "../store/ConverterService";

const Header = () => {
  //   const {
  //     data: USDData,
  //     error: USDError,
  //     isLoading: USDLoading,
  //   } = ConverterAPI.useGetLatestCurrencyQuery({
  //     symbols: "UAH",
  //     base: "USD",
  //   });
  //   const {
  //     data: EURData,
  //     error: EURError,
  //     isLoading: EURLoading,
  //   } = ConverterAPI.useGetLatestCurrencyQuery({
  //     symbols: "UAH",
  //     base: "USD",
  //   });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" color="inherit">
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
