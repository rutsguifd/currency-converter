import {
  Box,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ConverterAPI } from "../store/ConverterService";

const Convert = () => {
  const [currentFromCurrency, setCurrentFromCurrency] = useState("USD");
  const [currentToCurrency, setCurrentToCurrency] = useState("UAH");

  const [fromAmount, setFromAmount] = useState(1);
  const [trigger, result] = ConverterAPI.useLazyGetConvertedCurrencyQuery();
  const [toAmount, setToAmount] = useState(1);

  const handleFromChange = (e) => {
    setFromAmount(e.target.value);
    trigger({
      to: currentToCurrency,
      from: currentFromCurrency,
      amount: e.target.value,
    }).unwrap();
    setToAmount(result);
  };

  const handleFromSelect = (e) => {
    setCurrentFromCurrency(e.target.value);
  };
  const handleToSelect = (e) => {
    setCurrentToCurrency(e.target.value);
  };
  //console.log(currentFromCurrency, currentToCurrency);
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
      <Box display="flex" flexDirection="row" width="70%">
        <TextField
          value={fromAmount}
          variant="standard"
          sx={{ width: "100%" }}
          onChange={handleFromChange}
        />
        <Select
          id="demo-simple-select"
          value={currentFromCurrency}
          onChange={handleFromSelect}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EURO">EURO</MenuItem>
        </Select>
      </Box>
      <Box display="flex" flexDirection="row" width="70%">
        <TextField
          value={result.result}
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
          <MenuItem value="EURO">EURO</MenuItem>
        </Select>
      </Box>
    </Paper>
  );
};

export default Convert;
