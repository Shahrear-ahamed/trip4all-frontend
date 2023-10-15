import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function SingleBlogGrid() {
  return (
    <article className="w-full bg-white rounded-lg">
      <div className="relative">
        <img
          src="https://themes.ad-theme.com/html/tada/img/img-post-1.jpg"
          alt="post image 1"
          className="rounded-t-lg"
        />
        <div className="absolute left-5 top-5">
          <Link
            href="/"
            className="bg-primary text-white uppercase text-xs rounded px-6 py-3 transition-all duration-300 no-underline shadow-lg">
            IMG
          </Link>
        </div>
      </div>
      <div className="p-4 sm:p-7 md:p-10 lg:p-12 space-y-5">
        <div className="flex justify-between">
          <span className="text-primary ext-uppercase text-xs tracking-widest cursor-default">
            07 Jun 2016
          </span>
          <span className="text-primary ext-uppercase text-xs tracking-widest cursor-default">
            Posted by admin
          </span>
        </div>
        <h2 className="font-serif text-2xl font-semibold leading-tight text-gray-800">
          <Link
            href="/blog/single-blog"
            className="text-black transition-all duration-300 no-underline hover:text-gray-900">
            MAECENAS CONSECTETUR
          </Link>
        </h2>
        <p className="text-justify text-gray-500 font-light tracking-wide leading-6 cursor-default">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
          minim veniam. Nunc maximus arcu sit amet accumsan imperdiet. Aliquam
          elementum efficitur ipsum nec blandit. Pellentesque posuere vitae
          metus sed auctor. Nullam accumsan fringilla ligula non pellentesque.
        </p>
        <Link href="/" className="pt-2 inline-block">
          <Button variant="outline">Read more</Button>
        </Link>
      </div>
    </article>
  );
}
