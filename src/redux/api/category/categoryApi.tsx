import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (categoryData) => ({
        url: `${apiUrl.category_url}`,
        method: "POST",
        data: categoryData,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    updateSingleCategory: build.mutation({
      query: ({ id, categoryData }) => ({
        url: `${apiUrl.category_url}/${id}`,
        method: "PATCH",
        data: categoryData,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    deleteSingleCategory: build.mutation({
      query: (id) => ({
        url: `${apiUrl.category_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
    getSingleCategory: build.query({
      query: (id) => ({
        url: `${apiUrl.category_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    getAllCategories: build.query({
      query: () => ({
        url: `${apiUrl.category_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useDeleteSingleCategoryMutation,
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useUpdateSingleCategoryMutation,
} = categoryApi;
