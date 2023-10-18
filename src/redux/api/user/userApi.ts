import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const tagApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProfile: build.mutation({
      query: (profileData) => ({
        url: `${apiUrl.user_url}/me`,
        method: "PUT",
        data: profileData,
      }),
      invalidatesTags: [tagTypes.tag],
    }),
    getProfile: build.query({
      query: () => ({
        url: `${apiUrl.user_url}/me`,
        method: "GET",
      }),
      providesTags: [tagTypes.tag],
    }),
  }),
});

export const { useUpdateProfileMutation, useGetProfileQuery } = tagApi;
