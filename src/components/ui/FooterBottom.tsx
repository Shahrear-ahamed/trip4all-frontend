import React from "react";
import { Icons } from "./icons";
import Link from "next/link";
import Image from "next/image";

// logo
import logo from "../../../public/img/tirp4all_white.png";

export default function FooterBottom() {
  const footerIons = [
    {
      link: "https://www.facebook.com/shahrear.ahmed.754",
      icon: <Icons.facebook />,
    },
    {
      link: "https://github.com/shahrear-ahamed",
      icon: <Icons.githubFooter />,
    },
    {
      link: "https://www.youtube.com",
      icon: <Icons.youtube />,
    },
  ];
  return (
    <div className="container">
      <div className="max-w-7xl py-4 mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            width={150}
            height={50}
            className="w-auto h-7"
            src={logo}
            alt=""
          />
        </Link>

        <div className="flex -mx-2">
          {footerIons.map((item, index) => (
            <Link
              target="_blank"
              key={index}
              href={item.link}
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook">
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
