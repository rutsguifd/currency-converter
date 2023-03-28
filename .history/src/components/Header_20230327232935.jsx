import {
  AppBar,
  Box,
  CircularProgress,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
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
  //     base: "EUR",
  //   });
  //   if (USDError || EURError) {
  //     return null;
  //   }
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
          <Box margin={2} display="flex" flexDirection="row">
            <EuroSymbolIcon />
            {EURLoading ? (
              <CircularProgress />
            ) : (
              <Typography>{EURData.rates.UAH}</Typography>
            )}
          </Box>
          <Box margin={2} display="flex" flexDirection="row">
            <AttachMoneyIcon />
            {USDLoading ? (
              <CircularProgress />
            ) : (
              <Typography>{USDData.rates.UAH}</Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
