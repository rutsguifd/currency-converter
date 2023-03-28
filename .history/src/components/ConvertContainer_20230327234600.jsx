import { Container, Paper, useTheme } from "@mui/material";
import React from "react";
import Convert from "./Convert";

const ConvertContainer = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        background: `linear-gradient(to right bottom, ${theme.palette.secondary.main},  ${theme.palette.primary.main})`,
      }}
    >
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
        <Convert />
      </Paper>
    </Container>
  );
};

export default ConvertContainer;
