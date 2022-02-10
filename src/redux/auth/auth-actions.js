import { createAction } from "@reduxjs/toolkit";

export const user = createAction('auth/user')
export const refreshToken = createAction('auth/refreshToken')
export const entranceToken = createAction('auth/entranceToken')
export const isLoggedIn = createAction('auth/isLoggedIn')