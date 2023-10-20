import Link from "next/link";
import RatingStar from "./RatingStar";
import { IService } from "@/interface";
import Image from "next/image";
import { Button } from "./button";

export default function SingleTour({ tour }: { tour: IService }) {
  return (
    <article className="relative max-w-[1000px] md:max-h-[440px] h-full w-full mx-auto my-8 border border-gray-600 border-opacity-30 rounded-md shadow-md hover:shadow-lg duration-500">
      <div className="absolute bg-primary top-0 right-0 px-5 py-3 rounded-tr-md">
        <span className="text-xl text-white">${tour.price}</span>
      </div>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="w-full h-full md:w-1/2">
          <Image
            src={tour.thumbnail}
            alt=""
            height={380}
            width={500}
            className="w-full h-full object-cover bg-center bg-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
          />
        </div>
        <div className="w-full md:w-1/2 md:py-8 px-8 sm:px-12 md:px-16 lg:px-20 pl-5">
          <h3 className="text-2xl mt-0 md:mt-5">{tour.title}</h3>
          <div className="my-3">
            <RatingStar rate={3.5} />{" "}
          </div>
          <p
            className={`py-2 px-4 text-white text-xs rounded-full my-2 inline-block ${
              tour.status === "ongoing" ? "bg-green-400" : "bg-red-500"
            }`}>
            {tour.status}
          </p>
          <div
            className="text-base min-h-[140px]"
            dangerouslySetInnerHTML={{ __html: tour.description }}
          />
          {tour.status === "ongoing" ? (
            <Link
              href={`/service/book-service/${tour.id}`}
              className="py-2 px-5 mt-4 border-2 border-primary text-primary inline-block mb-5">
              Book This Tour
            </Link>
          ) : (
            <Button>Wait for this tour</Button>
          )}
        </div>
      </div>
    </article>
  );
}
