"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// images

import france from "../../../../public/carousel/france.jpg";
import africa from "../../../../public/carousel/africa.jpg";
import dubai from "../../../../public/carousel/dubai.jpg";
import egypt from "../../../../public/carousel/egypt.jpg";
import italy from "../../../../public/carousel/italy.jpg";
import spain from "../../../../public/carousel/spain.jpg";
import turkey from "../../../../public/carousel/turkey.jpg";

export default function Destinations() {
  const toursLists = [
    { country: "France", img: france },
    { country: "Italy", img: italy },
    { country: "Egypt", img: egypt },
    { country: "Dubai", img: dubai },
    { country: "Spain", img: spain },
    { country: "Turkey", img: turkey },
    { country: "Africa", img: africa },
  ];
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        880: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper relative !py-10">
      {toursLists.map((tour, index) => (
        <SwiperSlide key={index} className="shadow-none destinationSlice">
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <Image
                src={france}
                alt="tour"
                layout="fill"
                className="!w-64 !h-64 rounded-lg cursor-pointer !static"
              />
            </div>
            <h3 className="text-lg font-semibold">{tour.country}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
