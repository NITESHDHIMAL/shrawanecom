// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page=1, limit = 10}) => {
        const skip = ( page - 1) * limit;
         return `products?limit=${limit}&skip=${skip}`
         },
    }),

    getProductsBySerch: builder.query({
      query: (search) => `products/search${search}`,
    }),

    getProductByCategory: builder.query({
      query: (cat) => `products/category/${cat}`,
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`, 
        method: 'GET'
      }),
    }),

    postProduct: builder.mutation({
      query: (formData) => ({
        url: `products/add`, 
        method: 'POST',
        body: formData
      }),
    }),
  }),
})

export const { useGetProductsQuery, useGetProductsBySerchQuery, useGetProductByCategoryQuery, useGetSingleProductQuery, usePostProductMutation } = productApi