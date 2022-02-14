import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import financeReducer from "./finance/finance-reducer";
import authReducer from "./auth/auth-reducers";
import reportReducers from "./report/report-reducers";
import { transactionsApi } from "./services/transactionsAPI";
import { authAPI } from "./services/authAPI";
import { reportAPI } from "./services/reportAPI";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    finance: financeReducer,
    report: reportReducers,
    [authAPI.reducerPath]: authAPI.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [reportAPI.reducerPath]: reportAPI.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authAPI.middleware, transactionsApi.middleware, reportAPI.middleware),
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
