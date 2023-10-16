import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/tirp4all_white.png";
import { NavSolidItems, NavMobileItems } from "../ui/NavItems";
import { Button } from "@/components/ui/button";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="h-20">
      <div className="fixed w-full z-[100] bg-white bg-opacity-50 backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center h-20">
          <Link href="/">
            <Image
              width={150}
              height={50}
              className="w-auto h-7"
              src={logo}
              alt=""
            />
          </Link>
          <div className="flex h-full items-center">
            <NavSolidItems />

            <Link href="/sign-in" className="hidden md:inline-flex ml-10">
              <Button>Sign in</Button>
            </Link>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size={"icon"}
                    className="rounded-none">
                    <HiMenuAlt3 className="text-2xl" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="md:hidden">
                  <div className="text-sm flex flex-col space-y-5 mt-10 md:hidden">
                    <NavMobileItems />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
