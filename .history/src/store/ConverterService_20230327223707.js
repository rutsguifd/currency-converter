import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "https://api.apilayer.com/exchangerates_data/";

const BASE_QUERY = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-type", "appliation/json");
    headers.set("businessUnit", "EUS,MPS");
    headers.set("auth-token", tokenService.getLocalAccessToken());
    return headers;
  },
});

export const ConverterAPI = createApi({
  reducerPath: "ConverterAPI",
  baseQuery: BASE_QUERY,
  tagTypes: ["ConverterAPI"],
  endpoints: (build) => ({
    getLatestCurrency: build.query({
      query: (symbols, base) => `latest?symbols=${symbols}&base=${base}`,
    }),
  }),
});
