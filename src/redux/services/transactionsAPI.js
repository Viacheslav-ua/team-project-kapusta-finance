import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  tagTypes: ["Banking"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/banking",
  }),
  endpoints: (builder) => ({
    fetchAllTransactions: builder.query({
      query: () => `/get-transactions?reception=all`,
      providesTags: (result) => result,
    }),
    fetchProfitTransactions: builder.query({
      query: () => `/get-transactions?reception=profit`,
      providesTags: (result) => result,
    }),
    fetchCostsTransactions: builder.query({
      query: () => `/get-transactions?reception=costs`,
      providesTags: (result) => result,
    }),
    addTransaction: builder.mutation({
      query: (newTransaction) => ({
        url: `/add-transaction`,
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ["Banking"],
    }),
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: `/remove-transaction/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Banking", id: "LIST" }],
    }),
  }),
});
export const {
  useAddTransactionMutation,
  useFetchAllTransactionsQuery,
  useDeleteTransactionMutation,
  useFetchCostsTransactionsQuery,
  useFetchProfitTransactionsQuery,
} = transactionsApi;
