import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OurServiceHome() {
  const tourList = [
    {
      img: "https://images.unsplash.com/photo-1599106242383-271adeb2e828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Kerala",
    },
    {
      img: "https://images.unsplash.com/photo-1599106242383-271adeb2e828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Kerala",
    },
    {
      img: "https://images.unsplash.com/photo-1599106242383-271adeb2e828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Kerala",
    },
  ];
  return (
    <section className="mb-10 relative">
      <div className="container mx-auto flex flex-col items-center min-h-[400px] justify-end pt-10 lg:pt-0 relative">
        <div className="grid gap-5 md:gap-7 ld:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:absolute lg:-top-12 z-50 w-full justify-items-center">
          {tourList.map((tour, index) => (
            <div
              key={index}
              className="bg-gray-600 bg-opacity-50 max-w-[370px] w-full lg:w-[90%] xl:w-full min-w-[256px] h-[400px] cursor-pointer group rounded overflow-hidden relative hover:shadow-lg duration-500">
              <h3 className="text-center w-full text-2xl text-white absolute bottom-[15%] z-20">
                {tour.title}
              </h3>
              <div
                style={{ backgroundImage: `url(${tour.img})` }}
                className="object-cover bg-center bg-cover w-full h-full flex items-end group-hover:scale-105 px-10 pb-10 duration-500 rounded"></div>
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-0">
          <Link href="/tour">
            <Button variant="secondary" className="px-5 py-3">
              Other Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
