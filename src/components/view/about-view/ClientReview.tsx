"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClientReview() {
  const travelReviews = [
    {
      name: "Emma Thompson",
      review:
        "Amazing adventure! Explored breathtaking landscapes and cultural wonders. The trip exceeded expectations. Highly recommend for fellow travel enthusiasts!",
    },
    {
      name: "Daniel Miller",
      review:
        "Unforgettable journey! Explored diverse cities and natural wonders. Exceptional guides and seamless planning. A travel dream come true!",
    },
    {
      name: "Sophie White",
      review:
        "Incredible travel experience! Explored hidden gems and local cuisines. The itinerary was well-crafted, and the memories are priceless. Can't wait for the next adventure!",
    },
    {
      name: "Alex Rodriguez",
      review:
        "Awe-inspiring travel! Explored historical sites and vibrant cultures. Well-organized tour with knowledgeable guides. Every moment was a new discovery. Highly recommended!",
    },
    {
      name: "Olivia Taylor",
      review:
        "Fantastic journey! Explored breathtaking landscapes and immersed in local traditions. The trip was a perfect blend of adventure and relaxation. Grateful for the memories!",
    },
  ];

  return (
    <Swiper loop={true} className="my-10 max-w-5xl">
      {travelReviews.map((review, index) => (
        <SwiperSlide
          key={index}
          className="shadow-lg rounded-md py-10 px-5 mx-2 lg:mx-10 my-5 cursor-pointer about-review-slider !w-[calc(100%-16px)] border bg-gray-200">
          <article className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center text-sm max-w-3xl">
              <Avatar className="h-24 w-24 my-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p className="min-h-[60px]">{review.review}</p>
              <p className="mt-10 mb-3 text-xl">{review.name}</p>
              <span className="text-primary">Regular Client</span>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
