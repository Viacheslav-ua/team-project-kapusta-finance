import { createAction } from "@reduxjs/toolkit";

export const balance = createAction("finance/balance");
export const balanceProfit = createAction("finance/balanceProfit");
export const balanceCosts = createAction("finance/balanceCosts");
