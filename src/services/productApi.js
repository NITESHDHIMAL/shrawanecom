// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search) => `products${search}`,
    }),
    
    getProductsBySerch: builder.query({
      query: (search) => `products/search${search}`,
    }),

    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),




  }),
})
 
export const { useGetProductsQuery, useGetProductsBySerchQuery, useGetSingleProductQuery } = productApi