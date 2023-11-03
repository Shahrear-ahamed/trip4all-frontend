"use client";

import RatingStar from "@/components/ui/RatingStar";
import { Button } from "@/components/ui/button";
import LoadingUi from "@/components/ui/loadingUi";
import { IBooking } from "@/interface";
import { useCreateBookingMutation } from "@/redux/api/booking/bookingApi";
import { useGetSingleServiceQuery } from "@/redux/api/tour/tourApi";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

export default function ServiceBook({ params }: { params: { id: string } }) {
  const { data, isLoading, isSuccess } = useGetSingleServiceQuery(params.id);

  const [createBooking, { isSuccess: bookingSuccess, isError: bookingError }] =
    useCreateBookingMutation();

  const handleBook = async () => {
    await createBooking({
      serviceId: data.id,
    });
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingUi />
      </div>
    );
  }

  if (bookingSuccess && !bookingError) {
    toast.success("Booking successful", {
      position: "top-center",
    });
  }

  return (
    isSuccess &&
    data?.id && (
      <section className="my-10">
        <div className="relative rounded-xl">
          <Image
            height={550}
            width={1920}
            src={data?.thumbnail}
            alt={data?.title}
            className="object-cover rounded-xl max-h-[550px] min-h-[256px] h-full w-full"
          />
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:col-span-3 lg:col-span-2">
            <div className=" bg-white rounded-md p-5 md:p-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-5 pl-5 text-gray-700 font-semibold relative w-fit before:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gray-700 before:bg-opacity-40 before:w-1">
                {data?.title}
              </h1>
              <div className="flex flex-col sm:flex-row justify-between gap-5">
                <RatingStar rate={data?.rating || 0} />
                <p className="bg-primary px-3 py-1 rounded-sm my-5 text-white">
                  {data?.price}
                </p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: data?.description }}
                className="text-justify text-gray-600 font-light tracking-wide leading-6 cursor-default mt-5"
              />
            </div>

            <Button onClick={handleBook}>Book Now</Button>
          </div>
        </div>
      </section>
    )
  );
}
