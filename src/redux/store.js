import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import financeReducer from './finance/finance-reducer';
import authReducer from './auth/auth-reducers'
import { authApi } from './services/authAPI'

const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    [authApi.reducerPath]: authApi.reducer,
    finance: financeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(authApi.middleware)
})

const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor }