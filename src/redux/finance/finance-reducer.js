import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from './finance-actions'

const initialState = {
    balance: 0.00
}

const balance = createReducer(initialState.balance, {
    [actions.balance]: (_, {payload}) => payload
})

export default combineReducers({
    balance
})