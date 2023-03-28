import {
  Box,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Convert = () => {
  const [currentFromCurrency, setCurrentFromCurrency] = useState("USD");
  const [currentToCurrency, setCurrentToCurrency] = useState("UAH");
  //   const [currentFirstValue, setCurrentFirstValue] = useState(1);
  //   const [currentSecondValue, setCurrentSecondValue] = useState();

  const handleFirstChange = (e) => {
    setCurrentFirstCurrency(e.target.value);
  };
  const handleSecondChange = (e) => {
    setCurrentSecondCurrency(e.target.value);
  };
  console.log(currentFirstCurrency, currentSecondCurrency);
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
        <TextField variant="standard" sx={{ width: "100%" }} />
        <Select
          id="demo-simple-select"
          value={currentFirstCurrency}
          onChange={handleFirstChange}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EURO">EURO</MenuItem>
        </Select>
      </Box>
      <Box display="flex" flexDirection="row" width="70%">
        <TextField variant="standard" sx={{ width: "100%" }} />
        <Select
          id="demo-simple-select"
          value={currentToCurrency}
          onChange={handleSecondChange}
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