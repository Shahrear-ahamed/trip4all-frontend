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
import { useGetAllBookingQuery } from "@/redux/api/booking/bookingApi";

export default function NewBooking() {
  const { data, isLoading, isSuccess, isError } = useGetAllBookingQuery("");

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

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
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data?.data?.map((booking: IBooking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>
                  <span
                    className={`py-2 px-4 text-white text-xs rounded-full my-2 inline-block ${
                      booking.status === "confirmed"
                        ? "bg-green-400"
                        : "bg-red-500"
                    }`}>
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell>{booking.createdAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
