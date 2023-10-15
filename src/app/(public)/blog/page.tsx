import BlogList from "@/components/view/blog-view/BlogList";
import BlogSidebar from "@/components/view/blog-view/BlogSidebar";
import BlogSlider from "@/components/view/blog-view/BlogSlider";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <BlogSlider />
      <section className="my-10 grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
        <BlogList />
        <BlogSidebar title="Latest Posts" />
      </section>
    </>
  );
}
