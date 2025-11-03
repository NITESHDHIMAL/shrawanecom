import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query' 
import { productApi } from './services/productApi'
import { categoryApi } from './services/categoryApi'
import { profileApi } from './services/profileApi'

export const store = configureStore({
  reducer: { 
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
      profileApi.middleware,
    ),
})
 
setupListeners(store.dispatch)