import { Button } from "@/components/ui/button";
import { IBlog } from "@/interface";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleBlogGrid({ blog }: { blog: IBlog }) {
  return (
    <article className="w-full bg-white rounded-lg">
      <div className="relative">
        <div className="w-full bg-cover bg-center">
          <Image
            width={500}
            height={300}
            src={blog?.thumbnail ?? "/images/blog/blog-1.jpg"}
            alt={blog?.title}
            className="rounded-t-lg"
          />
        </div>
        <div className="absolute left-5 top-5">
          <span className="bg-primary text-white uppercase text-xs rounded px-6 py-3 transition-all duration-300 no-underline shadow-lg">
            IMG
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-7 md:p-10 lg:p-12 space-y-5">
        <div className="flex justify-between">
          <span className="text-primary ext-uppercase text-xs tracking-widest cursor-default">
            {DateTime.fromISO(blog.createdAt).toFormat("dd LLL yyyy")}
          </span>
          <span className="text-primary ext-uppercase text-xs tracking-widest cursor-default">
            Posted by admin
          </span>
        </div>
        <h2 className="font-serif text-2xl font-semibold leading-tight text-gray-800">
          <Link
            href={`/blog/${blog?.slug}`}
            className="text-black transition-all duration-300 no-underline hover:text-gray-900">
            {blog?.title}
          </Link>
        </h2>
        <p
          className="text-justify text-gray-500 font-light tracking-wide leading-6 cursor-default"
          dangerouslySetInnerHTML={{ __html: blog?.body.slice(0, 200) }}
        />

        <Link href={`/blog/${blog?.slug}`} className="pt-2 inline-block">
          <Button variant="outline">Read more</Button>
        </Link>
      </div>
    </article>
  );
}
