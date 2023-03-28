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
  const { data: USDData, isLoading: USDLoading } =
    ConverterAPI.useGetLatestCurrencyQuery({
      symbols: "UAH",
      base: "USD",
    });
  const { data: EURData, isLoading: EURLoading } =
    ConverterAPI.useGetLatestCurrencyQuery({
      symbols: "UAH",
      base: "EUR",
    });
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
              <CircularProgress color="secondary" />
            ) : (
              <Typography>{EURData.rates.UAH}</Typography>
            )}
          </Box>
          <Box margin={2} display="flex" flexDirection="row">
            <AttachMoneyIcon />
            {USDLoading ? (
              <CircularProgress color="secondary" />
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
