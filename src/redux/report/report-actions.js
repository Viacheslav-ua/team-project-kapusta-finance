import { createAction } from "@reduxjs/toolkit";
export const summary = createAction("report/summary");
export const categoryProfit = createAction("report/categoryProfit");
export const categoryCosts = createAction("report/categoryCosts");
export const categoryItems = createAction("report/categoryItems");