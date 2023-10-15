import Link from "next/link";
import React from "react";

export default function BlogSidebarLatestSingle() {
  return (
    <div className="flex items-center">
      <img
        src="https://themes.ad-theme.com/html/tada/img/latest-posts-2.jpg"
        alt="post 1"
        className="rounded-sm w-24 h-20 sm:w-48 sm:h-44 md:w-24 md:h-20 lg:w-28 lg:h-24"
      />
      <div className="ml-4 lg:ml-6">
        <h5 className="mb-3 text-sm">
          <Link href="/blog/single-blog" className="tracking-widest">
            MAECENAS CONSECTETUR
          </Link>
        </h5>
        <span className="text-xs text-primary mt-5">07 JUNE 2016</span>
      </div>
    </div>
  );
}
