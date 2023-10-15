import BlogSidebar from "@/components/view/blog-view/BlogSidebar";
import FullBlog from "@/components/view/single-blog-view/FullBlog";

export default function SinglePost() {
  return (
    <section>
      <div className="relative rounded-xl">
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          className="object-cover rounded-xl max-h-[550px] min-h-[256px] h-full w-full"
        />
      </div>
      <div className="my-10 grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
        <FullBlog />
        <BlogSidebar title="Related Posts" />
      </div>
    </section>
  );
}
