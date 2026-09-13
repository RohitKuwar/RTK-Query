import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),

  keepUnusedDataFor: 60,  // 60 seconds

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;