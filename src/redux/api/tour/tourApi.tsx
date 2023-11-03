import { tagTypes } from "@/redux/tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "../baseApi";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTour: build.mutation({
      query: (tourData) => ({
        url: `${apiUrl.tour_url}`,
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: [tagTypes.tour],
    }),
    updateSingleTour: build.mutation({
      query: ({ id, tourData }) => ({
        url: `${apiUrl.tour_url}/${id}`,
        method: "PATCH",
        data: tourData,
      }),
      invalidatesTags: [tagTypes.tour],
    }),
    deleteSingleTour: build.mutation({
      query: (id) => ({
        url: `${apiUrl.tour_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tour],
    }),
    getSingleTour: build.query({
      query: (id) => ({
        url: `${apiUrl.tour_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tour],
    }),
    getAllTours: build.query({
      query: () => ({
        url: `${apiUrl.tour_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.tour],
    }),
    getStatusTours: build.query({
      query: (status: string) => ({
        url: `${apiUrl.tour_url}/home/${status}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tour],
    }),
    getTourByCategory: build.query({
      query: (category: string) => ({
        url: `${apiUrl.tour_url}/home`,
        method: "GET",
      }),
      providesTags: [tagTypes.tour],
    }),
  }),
});

export const {
  useCreateTourMutation,
  useUpdateSingleTourMutation,
  useDeleteSingleTourMutation,
  useGetSingleTourQuery,
  useGetAllToursQuery,
  useGetStatusToursQuery,
  useGetTourByCategoryQuery,
} = tourApi;
