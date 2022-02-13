import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./finance-actions";

const initialState = {
  balance: 0.0,
  balanceProfit: 0.0,
  balanceCosts: 0.0,
};

const balance = createReducer(initialState.balance, {
  [actions.balance]: (_, { payload }) => payload,
});
const balanceProfit = createReducer(initialState.balanceProfit, {
  [actions.balanceProfit]: (_, { payload }) => payload,
});
const balanceCosts = createReducer(initialState.balanceCosts, {
  [actions.balanceCosts]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  balanceProfit,
  balanceCosts,
});
