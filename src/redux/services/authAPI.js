import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:3001/api/auth'
    }),
    tagTypes: ['Auth'],
    endpoints: builder => ({
        registrationUser: builder.mutation({
            query: newUser => ({
                url: '/registration',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['Auth'],
        }),
        loginUser: builder.mutation({
            query: dataLogin => ({
                url: '/login',
                method: 'POST',
                body: dataLogin,
            }),
            invalidatesTags: ['Auth'],
        }),
        logoutUser: builder.mutation({
            query: refreshToken => ({
                url: '/logout',
                method: 'POST',
                headers: {
                    Authorization : `Bearer ${refreshToken}`
                }
            }),
            invalidatesTags: ['Auth'],
        }),
        refreshToken: builder.mutation({
            query: refreshToken => ({
                url: '/refresh',
                method: 'GET',
                headers: {
                    Authorization : `Bearer ${refreshToken}`
                }
            }),
            invalidatesTags: ['Auth'],
        }),
        loginByGoogle: builder.query({
            query: () => '/google',
            providesTags: ['Auth'],
        })
    })
})

export const {
    useRegistrationUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useRefreshTokenMutation,
    useLoginByGoogleQuery
} = authAPI