import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const userPersistConfig = {
  key: 'user',
  storage: storageSession,
}

const persistedReducer = persistReducer(userPersistConfig, authReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)
