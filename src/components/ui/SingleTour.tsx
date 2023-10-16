import Link from "next/link";
import RatingStar from "./RatingStar";

export default function SingleTour() {
  return (
    <article className="relative max-w-[1000px] md:max-h-[380px] h-full w-full mx-auto my-8 border border-gray-600 border-opacity-30 rounded-md shadow-md hover:shadow-lg duration-500">
      <div className="absolute bg-primary top-0 right-0 px-5 py-3 rounded-tr-md">
        <span className="text-2xl text-white">$100</span>
      </div>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
            className="w-full h-full object-cover bg-center bg-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
          />
        </div>
        <div className="w-full md:w-1/2 md:py-8 px-8 sm:px-12 md:px-16 lg:px-20 pl-5">
          <h3 className="text-2xl">title</h3>
          <div className="my-3">
            <RatingStar rate={3.5} />
          </div>
          <p className="text-base min-h-[140px]">description</p>
          <Link
            href="/service/book-service/service-id"
            className="py-2 px-5 mt-4 border-2 border-primary text-primary inline-block mb-5">
            Book This Tour
          </Link>
        </div>
      </div>
    </article>
  );
}
