"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BlogSlider() {
  return (
    <section className="my-5">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper">
        <SwiperSlide className="!max-h-[550px] relative rounded-xl">
          <div className="absolute z-20 top-0 left-0 bg-gray-500 bg-opacity-30 w-full h-full rounded-xl flex flex-col justify-center">
            <div className="max-w-2xl w-[90%] mx-auto">
              <h4 className="text-white text-lg sm:text-xl md:text-2xl mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quaerat voluptates nulla neque
              </h4>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-white text-white text-xs sm:text-sm md:text-base">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
          <Image
            height={550}
            width={256}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="object-cover rounded-xl max-h-[550px] min-h-[256px] h-full w-full"
            alt="blog image"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
