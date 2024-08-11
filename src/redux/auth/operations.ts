import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { RootState } from "@redux/store";
import {
  axiosInstance,
  setAuthHeader,
  clearAuthHeader,
} from "@utils/axiosConfig";
import {
  RegisterResponse,
  RegisterPayload,
  LoginPayload,
  LoginResponse,
  ApiError,
} from "@typings/operations";

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk<RegisterResponse, RegisterPayload>(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/users/signup", credentials);
      return res.data;
    } catch (e) {
      const error = e as AxiosError<ApiError>;
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);

/*
 * POST @ /users/login
 * headers: Authorization: Bearer token
 * body: { email, password }
 */
export const logIn = createAsyncThunk<LoginResponse, LoginPayload>(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/users/login", credentials);
      const { token } = res.data;
      setAuthHeader(token);

      return res.data;
    } catch (e) {
      const error = e as AxiosError<ApiError>;
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axiosInstance.post("/users/logout");
    clearAuthHeader();
    return;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axiosInstance.get("/users/current");

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
