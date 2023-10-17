import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFaq: build.mutation({
      query: (faqData) => ({
        url: `${apiUrl.faq_url}`,
        method: "POST",
        data: faqData,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    updateSingleFaq: build.mutation({
      query: ({ id, faqData }) => ({
        url: `${apiUrl.faq_url}/${id}`,
        method: "PATCH",
        data: faqData,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    deleteSingleFaq: build.mutation({
      query: (id) => ({
        url: `${apiUrl.faq_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    getSingleFaq: build.query({
      query: (id) => ({
        url: `${apiUrl.faq_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    getAllFaqs: build.query({
      query: () => ({
        url: `${apiUrl.faq_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    getHomeFaqs: build.query({
      query: () => ({
        url: `${apiUrl.faq_url}/home`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useCreateFaqMutation,
  useUpdateSingleFaqMutation,
  useDeleteSingleFaqMutation,
  useGetAllFaqsQuery,
  useGetHomeFaqsQuery,
  useGetSingleFaqQuery,
} = faqApi;
