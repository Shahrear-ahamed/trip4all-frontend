import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (blogData) => ({
        url: `${apiUrl.blog_url}`,
        method: "POST",
        data: blogData,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    updateSingleBlog: build.mutation({
      query: ({ id, blogData }) => ({
        url: `${apiUrl.blog_url}/${id}`,
        method: "PATCH",
        data: blogData,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    deleteSingleBlog: build.mutation({
      query: (id) => ({
        url: `${apiUrl.blog_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getSingleBlogById: build.query({
      query: (id) => ({
        url: `${apiUrl.blog_url}/id/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    getAllBlogs: build.query({
      query: () => ({
        url: `${apiUrl.blog_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useDeleteSingleBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogByIdQuery,
  useUpdateSingleBlogMutation,
} = blogApi;
