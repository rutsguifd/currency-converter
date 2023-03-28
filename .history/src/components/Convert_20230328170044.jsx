import {
  Alert,
  Box,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { ConverterAPI } from "../store/ConverterService";

const Convert = () => {
  const debouncedFromAmount = useDebounce(getFromAmount, 500);
  const debouncedToAmount = useDebounce(getToAmount, 500);

  const [currentFromCurrency, setCurrentFromCurrency] = useState("USD");
  const [currentToCurrency, setCurrentToCurrency] = useState("USD");

  const [fromAmount, setFromAmount] = useState(1);
  const [trigger, { isError, isLoading, error }] =
    ConverterAPI.useLazyGetConvertedCurrencyQuery();
  const [toAmount, setToAmount] = useState(1);

  async function getFromAmount(to, from, amount) {
    const res = await trigger({
      to,
      from,
      amount,
    }).unwrap();
    setToAmount(res.result);
  }

  async function getToAmount(to, from, amount) {
    const res = await trigger({
      to,
      from,
      amount,
    }).unwrap();
    setFromAmount(res.result);
  }

  const handleFromChange = (e) => {
    setFromAmount(e.target.value);
    debouncedFromAmount(currentToCurrency, currentFromCurrency, e.target.value);
  };

  const handleToChange = async (e) => {
    setToAmount(e.target.value);
    debouncedToAmount(currentFromCurrency, currentToCurrency, e.target.value);
  };

  const handleFromSelect = (e) => {
    setCurrentFromCurrency(e.target.value);
    getToAmount(e.target.value, currentToCurrency, toAmount);
  };
  const handleToSelect = (e) => {
    setCurrentToCurrency(e.target.value);
    getFromAmount(e.target.value, currentFromCurrency, fromAmount);
  };
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "60vw",
        minWidth: "400px",
        height: "60vh",
        minHeight: "600px",
        gap: 4,
        boxShadow: 4,
      }}
    >
      <Typography variant="h4">Converter</Typography>
      {isError ? (
        <Alert severity="error">{error.data.error.message}</Alert>
      ) : null}
      <Box display="flex" flexDirection="row" width="70%">
        <TextField
          onChange={handleFromChange}
          value={fromAmount}
          variant="standard"
          sx={{ width: "100%" }}
        />
        <Select
          id="demo-simple-select"
          value={currentFromCurrency}
          onChange={handleFromSelect}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </Box>
      <Box display="flex" flexDirection="row" width="70%">
        <TextField
          onChange={handleToChange}
          value={toAmount}
          variant="standard"
          sx={{ width: "100%" }}
        />
        <Select
          id="demo-simple-select"
          value={currentToCurrency}
          onChange={handleToSelect}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </Box>
    </Paper>
  );
};

export default Convert;
