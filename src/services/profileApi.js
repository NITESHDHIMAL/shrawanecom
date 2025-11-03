// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://dummyjson.com/',
    prepareHeaders: (headers, { getState }) => {
    const user = JSON.parse(localStorage.getItem('user')); 
    const token = user?.accessToken; 
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    } 
    return headers
  },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `auth/me`,
    }), 

  }),
})
 
export const { useGetProfileQuery  } = profileApi