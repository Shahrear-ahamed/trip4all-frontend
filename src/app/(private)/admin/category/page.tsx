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
import { ICategory } from "@/interface";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import {
  useDeleteSingleCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/api/category/categoryApi";
const { DateTime } = require("luxon");

export default function AllRags() {
  const [deleteCategory, { isSuccess: categoryDeleteSuccess }] =
    useDeleteSingleCategoryMutation();
  const { data, isLoading, isSuccess, isError } = useGetAllCategoriesQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteCategory(id).unwrap();

      if (!res?.id) {
        return toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }

      toast.success("Category deleted successfully", {
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

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <Table className="mt-5 text-center">
        <TableCaption>A list of recent categories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">Body</TableHead>
            <TableHead className="text-center text-xl">Created At</TableHead>
            <TableHead className="text-center text-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data?.map((category: ICategory) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  {DateTime.fromISO(category.createdAt, {
                    zone: "utc",
                  }).toFormat("yyyy-MM-dd")}
                </TableCell>
                <TableCell className="w-full flex gap-4 justify-center">
                  <Link href={`/admin/content/all-faqs/${category.id}/edit`}>
                    <Button variant="ghost">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(category?.id)}>
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
