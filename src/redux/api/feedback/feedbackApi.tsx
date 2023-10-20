import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: (feedbackData) => ({
        url: `${apiUrl.feedback_url}`,
        method: "POST",
        data: feedbackData,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    updateSingleFeedback: build.mutation({
      query: ({ id, feedbackData }) => ({
        url: `${apiUrl.feedback_url}/${id}`,
        method: "PATCH",
        data: feedbackData,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    getAllFeedbacks: build.query({
      query: () => ({
        url: `${apiUrl.feedback_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useCreateFeedbackMutation,
  useUpdateSingleFeedbackMutation,
  useGetAllFeedbacksQuery,
} = faqApi;
