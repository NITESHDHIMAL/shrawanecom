// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (formData) => ({
                url: `auth/login`,
                method: 'POST',
                body: formData
            }),
        }),
    }),
})

export const { useLoginMutation } = loginApi