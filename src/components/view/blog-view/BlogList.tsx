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
    </div>
  );
}
