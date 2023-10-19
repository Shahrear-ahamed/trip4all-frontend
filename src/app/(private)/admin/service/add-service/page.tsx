"use client";

import { format } from "date-fns";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/ui/textEditor";
import imageUpload from "@/utils/imageUpload";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCreateServiceMutation } from "@/redux/api/service/serviceApi";
import SelectCategory from "@/components/ui/CategorySelect";
import SingleCalender from "@/components/ui/singleCalender";

interface FormValues {
  title: string;
  price: number;
  slots: number;
  status: string;
}

export default function AddService() {
  const [date, setDate] = useState<Date>(new Date());
  const [categoryId, setCategoryId] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [updateServiceImage, setUpdateServiceImage] = useState<File | null>(
    null
  );
  const [description, setDescription] = useState("");

  const [createService, { isLoading, isSuccess }] =
    useCreateServiceMutation(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setUpdateServiceImage(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { title, price, slots, status } = data;
    try {
      //   // check all field has or not
      if (!categoryId || !date || !updateServiceImage || !previewImg) {
        return toast.error("Please fill all fields", {
          position: "top-center",
        });
      }

      toast.loading("Please wait...", {
        position: "top-center",
      });

      const cloudinaryUrl = await imageUpload(updateServiceImage as File);

      if (!cloudinaryUrl) {
        return toast.error("Image upload failed", {
          position: "top-center",
        });
      }

      const serviceData = {
        title,
        price: Number(price),
        slots: Number(slots),
        status,
        categoryId,
        availableDate: format(date, "yyyy-MM-dd HH:mm:ss.SSS"),
        description: description,
        thumbnail: cloudinaryUrl.url,
      };

      // Send request to server

      const res = await createService(serviceData).unwrap();

      if (!res.id) {
        return toast.error("Blog created successfully", {
          position: "top-center",
        });
      }

      reset();
      setDescription("");
      setCategoryId("");
      setPreviewImg("");
      setUpdateServiceImage(null);
      toast.success("Service created successfully", {
        position: "top-center",
      });

      // Handle response
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="px-2">
      <h1 className="text-3xl font-semibold">Add New Service</h1>

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
                  placeholder="Service title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <div>
                <label htmlFor="price">Price</label>
                <Input
                  type="number"
                  id="price"
                  step={0.01}
                  placeholder="Service price"
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <div>
                <label htmlFor="slots">Slots</label>
                <Input
                  type="number"
                  id="slots"
                  placeholder="Blog slots it will use in url"
                  {...register("slots", { required: "Slots is required" })}
                />
                {errors.slots && (
                  <p className="text-red-500">{errors.slots.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <div>
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  {...register("status", { required: "Status is required" })}>
                  <option
                    value="upcoming"
                    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    Up coming
                  </option>
                  <option
                    value="ongoing"
                    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    On going
                  </option>
                </select>
                {errors.status && (
                  <p className="text-red-500">{errors.status.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="category">Category</label>
              <SelectCategory setCategoryId={setCategoryId} />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="category">Category</label>
              <SingleCalender date={date} setDate={setDate} />
            </div>

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
          <label htmlFor="description" className="mb-2">
            Write Your Service Description
          </label>
          <TextEditor text={description} setText={setDescription} />
        </div>

        <Button type="submit" className="w-[200px]">
          Submit
        </Button>
      </form>
    </section>
  );
}
