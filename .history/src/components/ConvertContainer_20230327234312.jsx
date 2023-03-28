import { Container, useTheme } from "@mui/material";
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
        background: `linear-gradient(to right bottom, ${theme.palette.secondary.main},  ${theme.palette.primary.main})`,
      }}
    >
      <Convert />
    </Container>
  );
};

export default ConvertContainer;
