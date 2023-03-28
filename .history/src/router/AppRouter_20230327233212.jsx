import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/error" element={<ErrorBoundary />} />
    </Routes>
  );
};

export default AppRouter;
