import BlogSidebar from "@/components/view/blog-view/BlogSidebar";
import FullBlog from "@/components/view/single-blog-view/FullBlog";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { IBlog } from "@/interface";
import Image from "next/image";

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`${getBaseUrl()}/blogs/${params.slug}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const blog: IBlog = data.data;
  return (
    <section>
      <div className="relative rounded-xl">
        <Image
          height={550}
          width={1920}
          src={blog.thumbnail}
          alt={blog.title}
          className="object-cover rounded-xl max-h-[550px] min-h-[256px] h-full w-full"
        />
      </div>
      <div className="my-10 grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
        <FullBlog blog={blog} />
        <BlogSidebar title="Related Posts" totalBlog={5} variant="vertical" />
      </div>
    </section>
  );
}
