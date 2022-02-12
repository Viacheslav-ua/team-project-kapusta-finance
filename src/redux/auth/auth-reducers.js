import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from './auth-actions'

const initialState = {
    user: { id: null, email: null, name: null },
    refreshToken: null,
    accessToken: null,
    isLoggedIn: false
}

const user = createReducer(initialState.user, {
    [actions.user]: (_, {payload}) => payload
})

const refreshToken = createReducer(initialState.refreshToken, {
    [actions.refreshToken]: (_, {payload}) => payload
})

const accessToken = createReducer(initialState.accessToken, {
    [actions.accessToken]: (_, {payload}) => payload
})

const isLoggedIn = createReducer(initialState.isLoggedIn, {
    [actions.isLoggedIn]: (_, {payload}) => payload
})

export default combineReducers({
    user,
    refreshToken,
    accessToken,
    isLoggedIn,
})