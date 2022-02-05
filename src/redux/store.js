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

const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    finance: financeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor }