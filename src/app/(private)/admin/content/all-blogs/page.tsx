"use client";

import { Button } from "@/components/ui/button";
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
  useDeleteSingleBlogMutation,
  useGetAllBlogsQuery,
} from "@/redux/api/blog/blogApi";
import Link from "next/link";
import { toast } from "react-toastify";
import { DateTime } from "luxon";
import { IBlog } from "@/interface";
import Image from "next/image";

export default function AllBlog() {
  const [deleteBlog, { isSuccess: blogDeleteSuccess }] =
    useDeleteSingleBlogMutation();

  const { data, isLoading, isSuccess, isError } = useGetAllBlogsQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBlog(id).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  if (blogDeleteSuccess) {
    toast.success("Blog deleted successfully", {
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
            <TableHead className="text-center text-xl">Image</TableHead>
            <TableHead className="text-center text-xl">Title</TableHead>
            <TableHead className="text-center text-xl">Created At</TableHead>
            <TableHead className="text-center text-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data.map((blog: IBlog) => (
              <TableRow key={blog.id}>
                <TableCell className="flex justify-center">
                  <Image
                    src={blog.thumbnail}
                    height={60}
                    width={100}
                    alt={blog.title}
                  />
                </TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>
                  {DateTime.fromISO(blog.createdAt, { zone: "utc" }).toFormat(
                    "yyyy-MM-dd"
                  )}
                </TableCell>
                <TableCell>
                  <div>
                    <Link href={`/admin/content/all-blogs/${blog.id}/edit`}>
                      <Button variant="ghost">Edit</Button>
                    </Link>
                    <Link href={`${blog.id}/`}>
                      <Button variant="ghost">View blog</Button>
                    </Link>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(blog?.id)}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
