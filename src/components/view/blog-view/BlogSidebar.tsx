"use client";

import React from "react";
import BlogSidebarLatestSingle from "./BlogSidebarLatestSingle";
import { useGetAllBlogsQuery } from "@/redux/api/blog/blogApi";

export default function BlogSidebar({
  title,
  variant = "vertical",
  totalBlog,
}: {
  title: string;
  variant: "horizontal" | "vertical";
  totalBlog: number;
}) {
  const { data } = useGetAllBlogsQuery(undefined);
  let className: string;

  if (variant === "horizontal") {
    className =
      "grid justify-center gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  } else {
    className = "md:px-4 lg:px-6 space-y-8";
  }
  console.log(data);

  return (
    <div className="md:col-span-2 lg:col-span-1">
      <h3 className="rounded-t-xl w-full text-center text-primary py-5 bg-white text-xl sm:text-2xl font-semibold mb-1">
        {title}
      </h3>
      <div className={`bg-white uppercase rounded-b-xl py-6 px-3 ${className}`}>
        <BlogSidebarLatestSingle variant={variant} />
        <BlogSidebarLatestSingle variant={variant} />
        <BlogSidebarLatestSingle variant={variant} />
        <BlogSidebarLatestSingle variant={variant} />
      </div>
    </div>
  );
}
