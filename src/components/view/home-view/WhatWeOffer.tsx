import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function WhatWeOffer() {
  return (
    <section
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80)`,
      }}
      className="h-[400px] bg-center bg-cover">
      <div className="text-center text-gray-100 bg-black bg-opacity-50 h-full flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          <span className="block">First-class Impressions</span>
          <span className="block">are Waiting for You!</span>
        </h3>
        <p className="my-7 text-sm mx-auto max-w-2xl text-white w-[90%]">
          Our agency offers travelers various tours and excursions with
          destinations all over the world. Browse our website to find your dream
          tour!
        </p>
        <Link href="/tours">
          <Button
            variant="outline"
            className="border-2 rounded-none border-white hover:border-primary hover:bg-primary text-white hover:text-white duration-500">
            Book a Tour Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
