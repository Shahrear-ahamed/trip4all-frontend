import { tagTypes } from "@/redux/tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (serviceData) => ({
        url: `${apiUrl.service_url}`,
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    updateSingleService: build.mutation({
      query: ({ id, serviceData }) => ({
        url: `${apiUrl.service_url}/${id}`,
        method: "PATCH",
        data: serviceData,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    deleteSingleService: build.mutation({
      query: (id) => ({
        url: `${apiUrl.service_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
    getSingleService: build.query({
      query: (id) => ({
        url: `${apiUrl.service_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    getAllServices: build.query({
      query: () => ({
        url: `${apiUrl.service_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    getStatusServices: build.query({
      query: (status: string) => ({
        url: `${apiUrl.service_url}/home/${status}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    getServiceByCategory: build.query({
      query: (category: string) => ({
        url: `${apiUrl.service_url}/home`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useDeleteSingleServiceMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useUpdateSingleServiceMutation,
  useGetStatusServicesQuery,
  useGetServiceByCategoryQuery,
} = serviceApi;
