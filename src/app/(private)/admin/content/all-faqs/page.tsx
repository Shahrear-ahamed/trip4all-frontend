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
import { IFaq } from "@/interface";
import {
  useDeleteSingleFaqMutation,
  useGetAllFaqsQuery,
} from "@/redux/api/faq/faqApi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
const { DateTime } = require("luxon");

export default function AllRags() {
  const [deleteFaq, { isSuccess: faqDeleteSuccess }] =
    useDeleteSingleFaqMutation();
  const { data, isLoading, isSuccess, isError } = useGetAllFaqsQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFaq(id).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  if (faqDeleteSuccess) {
    toast.success("Faq deleted successfully", {
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
            <TableHead className="text-center text-xl">Title</TableHead>
            <TableHead className="text-center text-xl">Body</TableHead>
            <TableHead className="text-center text-xl">Status</TableHead>
            <TableHead className="text-center text-xl">Created At</TableHead>
            <TableHead className="text-center text-xl">Action</TableHead>
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
                <TableCell className="w-full flex gap-4 justify-center">
                  <Link href={`/admin/content/all-faqs/${faq.id}/edit`}>
                    <Button variant="ghost">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(faq?.id)}>
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
