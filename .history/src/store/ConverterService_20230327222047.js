import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "http://localhost:3001/auth";

export const authAPI = createApi({
  reducerPath: "Converter",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Converter"],
  endpoints: (build) => ({
    registration: build.mutation({
      query: (user) => ({
        url: "/registration",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: build.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});
