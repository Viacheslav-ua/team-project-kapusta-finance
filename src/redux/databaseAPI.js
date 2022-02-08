import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const databaseAPI = createApi({
    reducerPath: 'databaseAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:3001/api'
    }),
    tagTypes: ['Auth', 'Banking'],
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
        }),
        resetBalance: builder.mutation({
            query: balance => ({
                url: '/banking/reset-balance',
                method: 'PATCH',
                body: balance,
            }),
            invalidatesTags: ['Banking'],
        })
    })
})

export const { useRegistrationUserMutation, useLoginUserMutation, useLogoutUserMutation, useResetBalanceMutation } = databaseAPI