"use client";

import { useForm, SubmitHandler, set } from "react-hook-form";
import { toast } from "react-toastify";
import SelectTag from "@/components/ui/SelectTag";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/ui/textEditor";
import imageUpload from "@/utils/imageUpload";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCreateBlogMutation } from "@/redux/api/blog/blogApi";

interface FormValues {
  title: string;
  slug: string;
}

export default function AddBlog() {
  const [tagId, setTagId] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [updateBlogImage, setUpdateBlogImage] = useState<File | null>(null);
  const [blog, setBlog] = useState("");

  const [createBlog, { isLoading, isSuccess }] =
    useCreateBlogMutation(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setUpdateBlogImage(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { title, slug } = data;
    try {
      // check all field has or not
      if (
        !title ||
        !slug ||
        !tagId ||
        !blog ||
        !updateBlogImage ||
        !previewImg
      ) {
        return toast.error("Please fill all fields", {
          position: "top-center",
        });
      }

      const cloudinaryUrl = await imageUpload(updateBlogImage as File);

      if (!cloudinaryUrl) {
        return toast.error("Image upload failed", {
          position: "top-center",
        });
      }

      const blogData = {
        title,
        slug: slug.toLowerCase().replace(/ /g, "-"),
        tagId,
        body: blog,
        thumbnail: cloudinaryUrl.url,
      };

      // Send request to server

      const res = await createBlog(blogData).unwrap();

      if (res.id) {
        reset();
        setBlog("");
        setTagId("");
        setPreviewImg("");
        setUpdateBlogImage(null);
        toast.success("Blog created successfully", {
          position: "top-center",
        });
      }

      // Handle response
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="px-2">
      <h1 className="text-3xl font-semibold">Add New Blog</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div className="grid gap-5">
            <div className="grid w-full gap-6">
              <div>
                <label htmlFor="title">Title</label>
                <Input
                  type="text"
                  id="title"
                  autoCapitalize="true"
                  placeholder="Blog title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <div>
                <label htmlFor="slug">Slug</label>
                <Input
                  type="text"
                  id="slug"
                  placeholder="Blog slug it will use in url"
                  {...register("slug", { required: "Slug is required" })}
                />
                {errors.slug && (
                  <p className="text-red-500">{errors.slug.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="tag">Tag</label>
              <SelectTag setTagId={setTagId} />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <div>
              <label htmlFor="picture">Picture</label>
              <Input type="file" id="picture" onChange={handleFileChange} />
              {previewImg && (
                <Image
                  src={previewImg}
                  height={200}
                  width={350}
                  alt="Preview image"
                  className="h-48 w-full"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 max-w-5xl min-h-[300px] mb-8">
          <label htmlFor="description">Write Your Post</label>
          <TextEditor text={blog} setText={setBlog} />
        </div>

        <Button type="submit" className="w-[200px]">
          Submit
        </Button>
      </form>
    </section>
  );
}
