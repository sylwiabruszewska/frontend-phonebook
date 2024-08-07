import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser } from "./operations";
import { User } from "@typings/models";
import { LoginResponse } from "@typings/operations";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        logIn.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.user = action.payload.data.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export type { AuthState };
