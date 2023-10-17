import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const tagApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTag: build.mutation({
      query: (tagData) => ({
        url: `${apiUrl.tag_url}`,
        method: "POST",
        data: tagData,
      }),
      invalidatesTags: [tagTypes.tag],
    }),
    updateSingleTag: build.mutation({
      query: ({ id, tagData }) => ({
        url: `${apiUrl.tag_url}/${id}`,
        method: "PATCH",
        data: tagData,
      }),
      invalidatesTags: [tagTypes.tag],
    }),
    deleteSingleTag: build.mutation({
      query: (id) => ({
        url: `${apiUrl.tag_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tag],
    }),
    getSingleTag: build.query({
      query: (id) => ({
        url: `${apiUrl.tag_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tag],
    }),
    getAllTags: build.query({
      query: () => ({
        url: `${apiUrl.tag_url}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tag],
    }),
  }),
});

export const {
  useCreateTagMutation,
  useUpdateSingleTagMutation,
  useDeleteSingleTagMutation,
  useGetAllTagsQuery,
  useGetSingleTagQuery,
} = tagApi;
