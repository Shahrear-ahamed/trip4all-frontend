import React from "react";

export default function BreadCrumbsContext({ title }: { title: string }) {
  return (
    <section className="bg-gray-600 bg-opacity-40 py-16 md:py-20 mb-10">
      <h1 className="text-3xl md:text-4xl uppercase text-center font-semibold text-gray-700">
        {title}
      </h1>
    </section>
  );
}
