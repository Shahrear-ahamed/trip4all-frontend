"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSlider() {
  const slidesData = [
    {
      title: "Trust Our Experience",
      description: "A team of professional Travel Experts",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Create Your Tour",
      description: "Build your next holiday trip with us",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
    },
    {
      title: "Explore The World",
      description: "Enjoy the Best Destinations with Our Travel Agency",
      img: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      direction="vertical"
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="homeSwiper !h-[550px] !cursor-pointer !bg-none z-40">
      {slidesData?.map((slide, index) => (
        <SwiperSlide
          className="!bg-transparent !bg-center !bg-cover"
          key={index}
          style={{
            backgroundImage: `url(${slide.img})`,
          }}>
          <div className="container flex h-full items-center">
            <div className="text-left max-w-5xl w-[90%] mx-auto bg-gray-300 bg-opacity-50 px-3 sm:px-4 md:px-10 py-3 sm:py-4 md:py-10 rounded-md">
              <p className="uppercase">{slide.description}</p>
              <h2 className="mt-5 mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                {slide.title}
              </h2>
              <Link href="/about">
                <Button
                  variant={"outline"}
                  className="rounded-none border-primary hover:bg-primary text-primary hover:text-white hover:border-primary duration-500 py-7 px-12 text-lg uppercase">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
