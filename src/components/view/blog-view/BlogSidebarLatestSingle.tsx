import { IBlog } from "@/interface";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogSidebarLatestSingle({
  variant = "vertical",
  blog,
}: {
  variant: "horizontal" | "vertical";
  blog: IBlog;
}) {
  return (
    <div
      className={`flex items-center 
        ${variant === "vertical" ? "" : "flex-col "}`}>
      <Image
        src={blog?.thumbnail}
        alt={blog?.title}
        height={variant === "vertical" ? 80 : 200}
        width={variant === "vertical" ? 80 : 350}
        className={`rounded-sm ${
          variant === "vertical"
            ? "w-24 h-20 sm:w-48 sm:h-44 md:w-24 md:h-20 lg:w-28 lg:h-24"
            : "w-[90%] max-w-[256px]"
        }`}
      />
      <div
        className={`
        ${
          variant === "vertical" ? "ml-4 lg:ml-6" : "flex-col text-center mt-5"
        }`}>
        <h5 className="mb-3 text-sm">
          <Link href={`/blog/${blog.slug}`} className="tracking-widest">
            {blog?.title}
          </Link>
        </h5>
        <span className="text-xs text-primary mt-5">
          {DateTime.fromISO(blog.createdAt).toFormat("dd LLL yyyy")}
        </span>
      </div>
    </div>
  );
}
