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
import { IFaq, ITag } from "@/interface";
import { useGetAllFaqsQuery } from "@/redux/api/faq/faqApi";
const { DateTime } = require("luxon");

export default function AllRags() {
  const { data, isLoading, isSuccess, isError } = useGetAllFaqsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  console.log("This is data", data);

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <Table className="mt-5 text-center">
        <TableCaption>A list of recent faqs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">Title</TableHead>
            <TableHead className="text-center text-xl">Body</TableHead>
            <TableHead className="text-center text-xl">Status</TableHead>
            <TableHead className="text-center text-xl">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data.map((faq: IFaq) => (
              <TableRow key={faq.id}>
                <TableCell>{faq.title}</TableCell>
                <TableCell>{faq.body}</TableCell>
                <TableCell>{faq.isActive.toString()}</TableCell>
                <TableCell>
                  {DateTime.fromISO(faq.createdAt, { zone: "utc" }).toFormat(
                    "yyyy-MM-dd"
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
