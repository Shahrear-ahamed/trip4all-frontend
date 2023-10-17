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
import { useGetAllTagsQuery } from "@/redux/api/tag/tagApi";
import { ITag } from "@/interface";
const { DateTime } = require("luxon");

export default function AllTags() {
  const { data, isLoading, isSuccess, isError } = useGetAllTagsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <Table className="mt-5 text-center">
        <TableCaption>A list of recent tags.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">Id</TableHead>
            <TableHead className="text-center text-xl">Title</TableHead>
            <TableHead className="text-center text-xl">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data.map((tag: ITag) => (
              <TableRow key={tag.id}>
                <TableCell className="max-w-[250px]">{tag.id}</TableCell>
                <TableCell>{tag.name}</TableCell>
                <TableCell>
                  {DateTime.fromISO(tag.createdAt, { zone: "utc" }).toFormat(
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
