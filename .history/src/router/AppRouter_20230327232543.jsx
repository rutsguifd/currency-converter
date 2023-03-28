import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const ProtectedRoute = ({ redirectPath = homeRoute }) => {
  const user = useAuth();

  if (!user?.isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
