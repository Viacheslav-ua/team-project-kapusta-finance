import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const BASE_USER_URL = "http://localhost:3001";
const userLogin = "/api/auth/login";
const userRegister = "/api/auth/registration";
const userLogOut = "/api/auth/logout";
const userCurrent = "/api/users/";

export const register = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log(data);

      toast.success("Вы зарегистрированы");
      return data;
    } catch (error) {
      toast.error("Пользователь с таким email уже зарегистрирован ");
      console.log(error);
    }
  }
);

export const login = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!data.accessToken) {
        toast.error("Такого пользователя не существует");
        throw new Error("Required");
      }
      toast.success("Вы успешно залогинились");
      return data;
    } catch (error) {
      return rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const current = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    console.log("currentThunk", state.auth.token);
    if (state.auth.token) {
      try {
        const response = await fetch(
          BASE_USER_URL + userCurrent + state.auth.id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${state.auth.token}`,
            },
          }
        );
        const data = await response.json();
        return data.data.result;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  }
);

export const logOut = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    if (state.auth.token) {
      try {
        const response = await fetch(BASE_USER_URL + userLogOut, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth.token}`,
          },
        });
        return response.statusText;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  }
);
