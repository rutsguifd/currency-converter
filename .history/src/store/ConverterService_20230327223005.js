import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "https://api.apilayer.com/exchangerates_data/";

export const ConverterAPI = createApi({
  reducerPath: "ConverterAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["ConverterAPI"],
  endpoints: (build) => ({
    getLatestCurrency: build.query({
      query: (symbols, base) => `latest?symbols=${symbols}&base=${base}`,
    }),
  }),
});
