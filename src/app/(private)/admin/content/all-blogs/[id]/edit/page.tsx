import UpdateBlog from "@/components/view/UpdateBlog";

export default function EditBlogPage({ params }: { params: { id: string } }) {
  return <UpdateBlog id={params.id} />;
}
