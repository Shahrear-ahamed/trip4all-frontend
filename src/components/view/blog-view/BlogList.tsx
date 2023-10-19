import React from "react";
import SingleBlogGrid from "./SingleBlogGrid";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { IBlog } from "@/interface";

export default async function BlogList() {
  const res = await fetch(`${getBaseUrl()}/blogs?limit=5`, {});
  const data = await res.json();

  const blogs: IBlog[] = data.data;
  return (
    <div className="space-y-10 md:col-span-3 lg:col-span-2">
      {blogs.map((blog: IBlog) => (
        <SingleBlogGrid key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
