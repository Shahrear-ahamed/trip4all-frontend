"use client";

import SingleTour from "@/components/ui/SingleTour";
import { IService } from "@/interface";
import { useGetAllToursQuery } from "@/redux/api/tour/tourApi";

export default function ServicePage() {
  const { data, isLoading } = useGetAllToursQuery(null);

  return (
    <section className="">
      {!isLoading && data.data ? (
        data.data?.map((tour: IService) => (
          <SingleTour key={tour.id} tour={tour} />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-96">
          <span>No tour available</span>
        </div>
      )}
    </section>
  );
}
