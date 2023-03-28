import { Paper } from "@mui/material";
import React from "react";

const Convert = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "40vw",
        minWidth: "400px",
        gap: 4,
        boxShadow: 4,
      }}
    ></Paper>
  );
};

export default Convert;
