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
import { IFeedback } from "@/interface";
import { useGetAllFeedbacksQuery } from "@/redux/api/feedback/feedbackApi";

export default function AllFeedback() {
  const { data, isLoading, isSuccess, isError } = useGetAllFeedbacksQuery("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <Table className="mt-5 text-center">
        <TableCaption>A list of recent faqs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">SL</TableHead>
            <TableHead className="text-center text-xl">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data?.data?.map((feedback: IFeedback, idx: number) => (
              <TableRow key={feedback.id}>
                <TableCell>idx</TableCell>
                <TableCell>{feedback.comment}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
