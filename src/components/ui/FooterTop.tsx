import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import NewsLetter from "./newsLetter";

export default function FooterTop() {
  const footerQuickLinks = [
    { link: "/", name: "Home" },
    { link: "/blog", name: "Blog" },
    { link: "/service", name: "Service" },
  ];
  return (
    <div className="container px-6 pt-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
            Subscribe our newsletter to get update.
          </h1>

          <div className="mt-3">
            <NewsLetter />
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 dark:text-white">
            Quick Link
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            {footerQuickLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 dark:text-white">
            Contact Us
          </p>

          <div>
            <ul className="flex flex-col items-start mt-5 space-y-3 text-sm">
              <li className="flex space-x-3 items-center text-gray-600 ">
                <BsTelephoneFill className="text-xl" />
                <span>+012 345 6789</span>
              </li>
              <li className="flex space-x-3 items-center text-gray-600 ">
                <LuMail className="text-xl" />
                <span>contact@trip4all.com</span>
              </li>
              <li className="flex space-x-3 items-center text-gray-600 ">
                <FaLocationDot className="text-xl" />
                <span>4730 Crystal Springs Dr, Los Angeles, CA 90027</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
