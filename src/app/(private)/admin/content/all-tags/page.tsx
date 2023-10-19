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
import {
  useDeleteSingleTagMutation,
  useGetAllTagsQuery,
} from "@/redux/api/tag/tagApi";
import { ITag } from "@/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
const { DateTime } = require("luxon");

export default function AllTags() {
  const [deleteTag, { isSuccess: tagDeleteSuccess }] =
    useDeleteSingleTagMutation();
  const { data, isLoading, isSuccess, isError } = useGetAllTagsQuery(
    undefined,
    { refetchOnMountOrArgChange: true }
  );

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteTag(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  if (tagDeleteSuccess) {
    toast.success("Tag deleted successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  }

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
            <TableHead className="text-center text-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data?.map((tag: ITag) => (
              <TableRow key={tag.id}>
                <TableCell className="max-w-[250px]">{tag.id}</TableCell>
                <TableCell>{tag.name}</TableCell>
                <TableCell>
                  {DateTime.fromISO(tag.createdAt, { zone: "utc" }).toFormat(
                    "yyyy-MM-dd"
                  )}
                </TableCell>
                <TableCell className="w-full flex gap-4 justify-center">
                  <Link href={`/admin/content/all-tags/${tag.id}/edit`}>
                    <Button variant="ghost">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(tag?.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
