import { entityListReducer } from '@entity-list';
import { authReducer } from '@jiret/auth';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './app.api';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    entityList: entityListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
