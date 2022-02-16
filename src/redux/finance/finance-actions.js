import { createAction } from "@reduxjs/toolkit";

export const balance = createAction("finance/balance");
export const allTransaction = createAction("finance/allTransaction");
export const profitTransaction = createAction("finance/profitTransaction");
export const costsTransaction = createAction("finance/costsTransaction");
export const categoryList = createAction("finance/categoryList");
