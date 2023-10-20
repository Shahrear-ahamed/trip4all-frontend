import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (reviewData) => ({
        url: `${apiUrl.review_url}`,
        method: "POST",
        data: reviewData,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    updateSingleReview: build.mutation({
      query: ({ id, reviewData }) => ({
        url: `${apiUrl.review_url}/${id}`,
        method: "PATCH",
        data: reviewData,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getAllReview: build.query({
      query: () => ({
        url: `${apiUrl.review_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    getMyReview: build.query({
      query: () => ({
        url: `${apiUrl.review_url}/my-reviews`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useUpdateSingleReviewMutation,
  useGetAllReviewQuery,
  useGetMyReviewQuery,
} = reviewApi;
