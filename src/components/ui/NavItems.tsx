"use client";

import Link from "next/link";
import { SheetClose } from "./sheet";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact-us",
  },
];

export const NavMobileItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col space-y-7 font-semibold md:hidden justify-center text-sm ml-5">
      {navLinks.map((item, index) => (
        <li key={index}>
          <SheetClose asChild>
            <Link
              href={item.link}
              className={`${pathname === item.link ? "text-[#2563EB]" : ""}`}>
              {item.name}
            </Link>
          </SheetClose>
        </li>
      ))}
    </ul>
  );
};

export const NavSolidItems = () => {
  const pathname = usePathname();
  return (
    <ul className="h-full font-semibold hidden md:flex md:ml-auto flex-wrap items-center justify-center text-sm">
      {navLinks.map((item, index) => (
        <li key={index} className="h-full">
          <NavLink href={item.link} active={pathname === item.link}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const NavLink = ({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={`hover:text-primary hover:duration-500 px-5 h-full flex items-center relative w-fit after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
      active ? "text-primary after:scale-x-100" : ""
    }`}>
    {children}
  </Link>
);
