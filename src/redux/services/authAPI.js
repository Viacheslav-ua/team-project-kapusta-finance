import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:3001/api'
    }),
    tagTypes: ['Auth'],
    endpoints: builder => ({
        registrationUser: builder.mutation({
            query: newUser => ({
                url: '/auth/registration',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['Auth'],
        }),
        loginUser: builder.mutation({
            query: dataLogin => ({
                url: '/auth/login',
                method: 'POST',
                body: dataLogin,
            }),
            invalidatesTags: ['Auth'],
        }),
        logoutUser: builder.mutation({
            query: token => ({
                url: '/auth/logout',
                method: 'POST',
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }),
            invalidatesTags: ['Auth'],
        })
    })
})

export const { useRegistrationUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi