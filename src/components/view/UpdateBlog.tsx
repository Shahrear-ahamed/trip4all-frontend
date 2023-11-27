"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import SelectTag from "@/components/ui/SelectTag";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/ui/textEditor";
import imageUpload from "@/utils/imageUpload";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  useGetSingleBlogByIdQuery,
  useUpdateSingleBlogMutation,
} from "@/redux/api/blog/blogApi";
import removeEmptyProperties from "@/utils/removeEmptyProperties";

interface FormValues {
  title?: string;
  slug?: string;
}

export default function UpdateBlog({ id }: { id: string }) {
  const [tagId, setTagId] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [updateBlogImage, setUpdateBlogImage] = useState<File | null>(null);
  const [blog, setBlog] = useState("");

  const [updateBlog] = useUpdateSingleBlogMutation(undefined);
  const { data, isSuccess } = useGetSingleBlogByIdQuery(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>();

  useEffect(() => {
    // set data to state
    if (isSuccess) {
      setTagId(data?.tagId);
      setBlog(data?.body);
      setValue("slug", data?.slug);
      setValue("title", data?.title);
      setPreviewImg(data?.thumbnail);
    }
  }, [
    data?.body,
    data?.slug,
    data?.tagId,
    data?.thumbnail,
    data?.title,
    isSuccess,
    setValue,
  ]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setUpdateBlogImage(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { title } = data;
    try {
      // check all field has or not
      if (!title || !tagId || !blog) {
        return toast.error("Please fill all fields", {
          position: "top-center",
        });
      }

      let cloudinaryUrl = null;

      if (updateBlogImage) {
        cloudinaryUrl = await imageUpload(updateBlogImage as File);
      }

      if (!cloudinaryUrl && updateBlogImage) {
        return toast.error("Image upload failed", {
          position: "top-center",
        });
      }

      const blogData = removeEmptyProperties({
        title,
        tagId,
        body: blog,
        thumbnail: cloudinaryUrl?.url,
      });

      // Send request to server
      const res = await updateBlog({ id: id, blogData }).unwrap();

      // Handle response
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
                  disabled
                  {...register("slug", { required: "Slug is required" })}
                />
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
