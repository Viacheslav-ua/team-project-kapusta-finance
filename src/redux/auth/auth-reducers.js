import { createSlice } from "@reduxjs/toolkit";
import { register, login, current, logOut } from "./auth-operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,

    id: "",
  },
  redusers: {
    renameProp: (state, action) => {
      return { ...state, myLoad: action.payload };
    },
  },
  extraReducers: {
    [register.pending](state, action) {
      return {
        isLoading: true,
      };
    },
    [register.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,

        email: action.payload.email,
        id: action.payload.id,
        isAuth: false,
      };
    },
    [register.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [login.pending](state, action) {
      return {
        isLoading: true,
      };
    },
    [login.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        id: action.payload.id,
        isAuth: true,
      };
    },
    [login.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [current.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    },
    [current.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,
        isAuth: true,
      };
    },
    [current.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [logOut.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    },
    [logOut.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        name: "",
        email: "",
        token: "",
        isAuth: false,
      };
    },
    [logOut.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        //  error: action.payload,
        isAuth: false,
      };
    },
  },
});

export const { renameProp } = authSlice.actions;
export default authSlice.reducer;
