// import { axiosBaseQuery } from '@jiret/core';
import { createApi } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  // baseQuery: axiosBaseQuery(),
  tagTypes: ['Catagory'],
  endpoints: () => ({}),
});
