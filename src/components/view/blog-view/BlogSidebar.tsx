import React from "react";
import BlogSidebarLatestSingle from "./BlogSidebarLatestSingle";

export default function BlogSidebar() {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <h3 className="rounded-t-xl w-full text-center text-primary py-5 bg-white text-xl sm:text-2xl lg:text-3xl">
        Latest Posts
      </h3>
      <div className="mt-1 bg-white py-6 px-3 md:px-4 lg:px-6 uppercase rounded-b-xl space-y-8">
        <BlogSidebarLatestSingle />
        <BlogSidebarLatestSingle />
        <BlogSidebarLatestSingle />
        <BlogSidebarLatestSingle />
        <BlogSidebarLatestSingle />
      </div>
    </div>
  );
}
