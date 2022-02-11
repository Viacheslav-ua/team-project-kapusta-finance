import { createAction } from "@reduxjs/toolkit";

export const user = createAction('auth/user')
export const refreshToken = createAction('auth/refreshToken')
export const accessToken = createAction('auth/accessToken')
export const isLoggedIn = createAction('auth/isLoggedIn')