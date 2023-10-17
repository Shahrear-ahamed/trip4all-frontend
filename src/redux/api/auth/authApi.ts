import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignIn: build.mutation({
      query: (signInData) => ({
        url: `${apiUrl.auth_url}/sign-in`,
        method: "POST",
        data: signInData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    userSignUp: build.mutation({
      query: (signUpData) => ({
        url: `${apiUrl.auth_url}/sign-up`,
        method: "POST",
        data: signUpData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    createUser: build.mutation({
      query: (userData) => ({
        url: `${apiUrl.auth_url}/create-user`,
        method: "POST",
        data: userData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserSignInMutation, useUserSignUpMutation } = authApi;
