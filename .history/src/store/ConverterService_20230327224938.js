import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "https://api.apilayer.com/exchangerates_data/";

const BASE_QUERY = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("apikey", "3yTPGVUhUYyAGGgNkKb2MySzxmY4qcWi");
    return headers;
  },
});

export const ConverterAPI = createApi({
  reducerPath: "ConverterAPI",
  baseQuery: BASE_QUERY,
  tagTypes: ["ConverterAPI"],
  endpoints: (build) => ({
    getLatestCurrency: build.query({
      query: ({ symbols, base }) => `latest?symbols=${symbols}&base=${base}`,
    }),
  }),
});
