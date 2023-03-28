import React from "react";
import MainLayout from "../layout/MainLayout";
import { ConverterAPI } from "../store/ConverterService";

const HomePage = () => {
  const { data, error, isLoading } = ConverterAPI.useGetLatestCurrencyQuery(
    "UAH",
    "USD"
  );
  return <MainLayout>{JSON.stringify(data)}</MainLayout>;
};

export default HomePage;
