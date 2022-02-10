import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from './auth-actions'

const initialState = {
    user: { name: null, email: null },
    refreshToken: null,
    entranceToken: null,
    isLoggedIn: false
}

const user = createReducer(initialState.user, {
    [actions.user]: (_, {payload}) => payload
})

const refreshToken = createReducer(initialState.refreshToken, {
    [actions.refreshToken]: (_, {payload}) => payload
})

const entranceToken = createReducer(initialState.entranceToken, {
    [actions.entranceToken]: (_, {payload}) => payload
})

const isLoggedIn = createReducer(initialState.isLoggedIn, {
    [actions.isLoggedIn]: (_, {payload}) => payload
})

export default combineReducers({
    user,
    refreshToken,
    entranceToken,
    isLoggedIn,
})