"use client";

import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function CountUpContext() {
  const countParts = [
    {
      end: 12,
      exe: "",
      name: "Awards",
    },
    {
      end: 192,
      exe: "",
      name: "Tours",
    },
    {
      end: 3,
      exe: "k",
      name: "Travelers",
    },
    {
      end: 25,
      exe: "",
      name: "Team Members",
    },
  ];
  return (
    <section className="bg-gray-600 bg-opacity-40 py-16 md:py-20">
      <div className="container mx-auto grid gap-5 grid-cols-2 md:grid-cols-4">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }: { isVisible: boolean }) =>
            countParts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-1 w-full text-center items-center py-2 md:p-0">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold h-20">
                  {isVisible ? <CountUp end={item.end} delay={0} /> : null}
                  {isVisible && item.exe}
                </span>
                <span className="text-base sm:text-xl md:text-2xl">
                  {item.name}
                </span>
              </div>
            ))
          }
        </VisibilitySensor>
      </div>
    </section>
  );
}
