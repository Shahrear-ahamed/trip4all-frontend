"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import signUpImage from "../../../public/img/sign-up.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RandomQuoteDisplay from "@/components/ui/RandomQuotes";

import logo from "../../../public/img/tirp4all_white.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="container relative h-[100vh] flex-col justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "md:absolute right-4 top-4 md:right-8 md:top-8"
        )}>
        {pathname === "/sign-up" ? "Sign In" : "Sign Up"}
      </Link>
      <div className="relative hidden flex-col bg-muted text-white dark:border-r lg:flex">
        <div className="absolute h-full w-full bg-black opacity-30"></div>
        <div className="absolute left-4 top-4 md:right-8 md:top-8 z-20 flex items-center text-lg font-medium">
          <Link href="/">
            <Image
              width={150}
              height={50}
              className="w-auto h-7"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <Image
          src={signUpImage}
          width={1280}
          height={1000}
          alt="sign up image"
          className="block dark:hidden bg-cover bg-no-repeat object-cover object-center w-full h-full"
        />
        <div className="absolute z-20 bottom-10 w-full">
          <RandomQuoteDisplay />
        </div>
      </div>
      <div className="lg:p-8 flex items-center">{children}</div>
    </div>
  );
}
