import SingleTour from "@/components/ui/SingleTour";
import React from "react";

export default function HotTours() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Hot Tours
        </h2>

        <div>
          <SingleTour />
          <SingleTour />
          <SingleTour />
        </div>
      </div>
    </section>
  );
}
