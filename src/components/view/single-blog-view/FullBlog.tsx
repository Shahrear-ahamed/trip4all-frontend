import PortableText from "@/components/ui/PortableText";
import { Button } from "@/components/ui/button";
import { ISlugBlog } from "@/interface";
import Link from "next/link";
import React from "react";

export default function FullBlog({ blog }: { blog: ISlugBlog }) {
  return (
    <div className="space-y-10 md:col-span-3 lg:col-span-2">
      <div className=" bg-white rounded-md p-5 md:p-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-5 pl-5 text-gray-700 font-semibold relative w-fit before:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gray-700 before:bg-opacity-40 before:w-1">
          {blog.title}
        </h1>
        <PortableText text={blog.body} />
      </div>

      <div className="my-10 w-full flex flex-col sm:flex-row gap-5 justify-between">
        {blog?.previousBlog && (
          <Link href={`/blog/${blog?.previousBlog}`}>
            <Button className="bg-white text-gray-600 tracking-wider hover:bg-gray-100 duration-500 group relative pl-8">
              <span className="absolute top-[47%] -translate-y-1/2 left-4 group-hover:left-3 duration-500">
                &laquo;
              </span>{" "}
              Previous Post
            </Button>
          </Link>
        )}
        {blog?.nextBlog && (
          <Link href={`/blog/${blog?.nextBlog}`}>
            <Button className="bg-white text-gray-600 tracking-wider hover:bg-gray-100 duration-500 group relative pr-8">
              Next Post{" "}
              <span className="absolute top-[47%] -translate-y-1/2 right-4 group-hover:right-3 duration-500">
                &raquo;
              </span>
            </Button>
          </Link>
        )}
      </div>

      {/* // comment section */}

      <div className="w-full bg-white rounded-md p-5">
        <h4 className="text-2xl border-b-2 border-b-primary pb-2">Comments</h4>
        <div className="w-full h-20 flex items-center justify-center">
          Available sooon! Thanks 😀😀
        </div>
      </div>
    </div>
  );
}
