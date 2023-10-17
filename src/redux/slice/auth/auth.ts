import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  id: string;
  email: string;
  role: string;
}

const initialState: AuthState = {
  id: "",
  email: "",
  role: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.role = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
