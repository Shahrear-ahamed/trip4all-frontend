import { baseApi } from "./api/baseApi";
import authReducer from "./slice/auth/auth";

export const reducer = {
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
