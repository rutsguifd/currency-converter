import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Convert = () => {
  const [currentCurrency, setCurrentCurrency] = useState("");

  const handleChange = (e) => {
    setCurrentCurrency(e.target.value);
  };

  console.log(currentCurrency);
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
          value={currentCurrency}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>UAH</MenuItem>
          <MenuItem value={20}>USD</MenuItem>
          <MenuItem value={30}>EURO</MenuItem>
        </Select>
      </Box>
    </Paper>
  );
};

export default Convert;