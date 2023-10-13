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
    link: "/contact",
  },
];

export const NavMobileItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col space-y-10 font-semibold">
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
    <ul className="flex space-x-10 h-full items-center font-semibold">
      {navLinks.map((item, index) => (
        <li key={index}>
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
    className={`mr-5 hover:text-[#2563EB] hover: duration-500 ${
      active ? "text-[#2563EB]" : ""
    }`}>
    {children}
  </Link>
);
