import { tagTypes } from "../../tag-types";
import apiUrl from "../apiUrl";
import { baseApi } from "./../baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (bookingData) => ({
        url: `${apiUrl.booking_url}`,
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    updateSingleBooking: build.mutation({
      query: ({
        id,
        bookingData,
      }: {
        id: string;
        bookingData: {
          status: string;
        };
      }) => ({
        url: `${apiUrl.booking_url}/${id}`,
        method: "PATCH",
        data: bookingData,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    deleteSingleBooking: build.mutation({
      query: (id: string) => ({
        url: `${apiUrl.booking_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getSingleBooking: build.query({
      query: (id: string) => ({
        url: `${apiUrl.booking_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    getAllBooking: build.query({
      query: (status: string) => ({
        url: `${apiUrl.booking_url}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    getAllPendingBooking: build.query({
      query: (status: string) => ({
        url: `${apiUrl.booking_url}/book-status/${status}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    getMyBookingBooking: build.query({
      query: (status: string) => ({
        url: `${apiUrl.booking_url}/my-bookings`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useUpdateSingleBookingMutation,
  useDeleteSingleBookingMutation,
  useGetSingleBookingQuery,
  useGetAllBookingQuery,
  useGetAllPendingBookingQuery,
  useGetMyBookingBookingQuery,
} = bookingApi;
