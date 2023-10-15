import React from "react";
import SingleBlogGrid from "./SingleBlogGrid";
import { Button } from "@/components/ui/button";

export default function BlogList() {
  return (
    <div className="space-y-10 md:col-span-3 lg:col-span-2">
      <SingleBlogGrid />
      <SingleBlogGrid />
      <SingleBlogGrid />
      <SingleBlogGrid />
      <SingleBlogGrid />

      <div className="my-10 w-full flex flex-col sm:flex-row gap-5 justify-between">
        <Button className="bg-white text-gray-600 tracking-wider hover:bg-gray-100 duration-500 group relative pl-8">
          <span className="absolute top-[47%] -translate-y-1/2 left-4 group-hover:left-3 duration-500">
            &laquo;
          </span>{" "}
          Previous Post
        </Button>
        <Button className="bg-white text-gray-600 tracking-wider hover:bg-gray-100 duration-500 group relative pr-8">
          Next Post{" "}
          <span className="absolute top-[47%] -translate-y-1/2 right-4 group-hover:right-3 duration-500">
            &raquo;
          </span>
        </Button>
      </div>
    </div>
  );
}
