"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBooking } from "@/interface";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import {
  useGetAllPendingBookingQuery,
  useUpdateSingleBookingMutation,
} from "@/redux/api/booking/bookingApi";
const { DateTime } = require("luxon");

export default function NewBooking() {
  const [updateBooking, { isSuccess: bookingDeleteSuccess }] =
    useUpdateSingleBookingMutation();
  const { data, isLoading, isSuccess, isError } =
    useGetAllPendingBookingQuery("pending");

  const handleUpdate = async (id: string) => {
    try {
      const res = await updateBooking({
        id,
        bookingData: { status: "confirmed" },
      }).unwrap();

      if (!res?.id) {
        return toast.error("something wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }

      toast.success("Booking updated successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  if (bookingDeleteSuccess) {
    toast.success("Booking deleted successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  }

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <Table className="mt-5 text-center">
        <TableCaption>A list of recent faqs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">Id</TableHead>
            <TableHead className="text-center text-xl">Status</TableHead>
            <TableHead className="text-center text-xl">Created At</TableHead>
            <TableHead className="text-center text-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data?.data?.map((booking: IBooking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>{booking.createdAt}</TableCell>
                <TableCell>
                  {DateTime.fromISO(booking.createdAt, {
                    zone: "utc",
                  }).toFormat("yyyy-MM-dd")}
                </TableCell>
                <TableCell className="w-full flex gap-4 justify-center">
                  <Button
                    variant="destructive"
                    onClick={() => handleUpdate(booking?.id)}>
                    Update status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
