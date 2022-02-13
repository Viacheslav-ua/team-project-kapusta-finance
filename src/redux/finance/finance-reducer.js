import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./finance-actions";

const initialState = {
  balance: 0.0,
  allTransaction: [],
  profitTransaction: [],
  costsTransaction: [],
  categoryList: [],
};

const balance = createReducer(initialState.balance, {
  [actions.balance]: (_, { payload }) => payload,
});
const allTransaction = createReducer(initialState.allTransaction, {
  [actions.allTransaction]: (_, { payload }) => payload,
});
const profitTransaction = createReducer(initialState.profitTransaction, {
  [actions.profitTransaction]: (_, { payload }) => payload,
});
const costsTransaction = createReducer(initialState.costsTransaction, {
  [actions.costsTransaction]: (_, { payload }) => payload,
});
const categoryList = createReducer(initialState.categoryList, {
  [actions.categoryList]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  allTransaction,
  profitTransaction,
  costsTransaction,
  categoryList,
});
