import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  tagTypes: ["Banking"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/banking",
  }),
  endpoints: (builder) => ({
    fetchAllTransactions: builder.mutation({
      query: (accessToken) => ({
        url: `/get-transactions?reception=all`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["Banking"],
    }),

    fetchProfitTransactions: builder.mutation({
      query: (accessToken) => ({
        url: `/get-transactions?reception=profit`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["Banking"],
    }),

    fetchCostsTransactions: builder.mutation({
      query: (accessToken) => ({
        url: `/get-transactions?reception=costs`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["Banking"],
    }),

    addTransaction: builder.mutation({
      query: (accessToken, newTransaction) => ({
        url: `/add-transaction`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: newTransaction,
      }),
      invalidatesTags: ["Banking"],
    }),

    deleteTransaction: builder.mutation({
      query: (accessToken, idUser) => ({
        url: `/remove-transaction/${idUser}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["Banking"],
    }),
  }),
});
export const {
  useAddTransactionMutation,
  useFetchAllTransactionsMutation,
  useDeleteTransactionMutation,
  useFetchCostsTransactionsMutation,
  useFetchProfitTransactionsMutation,
} = transactionsApi;
