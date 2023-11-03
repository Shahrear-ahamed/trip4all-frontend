"use client";

import SingleTour from "@/components/ui/SingleTour";
import { IService } from "@/interface";
import { useGetStatusToursQuery } from "@/redux/api/tour/tourApi";
import React from "react";

export default function Tours({
  status,
  title,
}: {
  status: string;
  title: string;
}) {
  const { data, isLoading } = useGetStatusToursQuery(status);
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          {title} Tours
        </h2>

        <div>
          {!isLoading && data?.length > 0 ? (
            data?.map((tour: IService) => (
              <SingleTour key={tour.id} tour={tour} />
            ))
          ) : (
            <p className="text-center text-xl">
              No Tours Available At this moment
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
