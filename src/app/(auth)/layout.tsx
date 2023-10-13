"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import signUpImage from "../../../public/img/sign-up.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="container relative h-[100vh] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}>
        {pathname === "/sign-up" ? "Sign In" : "Sign Up"}
      </Link>
      <div className="relative hidden h-[100vh] flex-col bg-muted text-white dark:border-r lg:flex">
        <div className="absolute h-[100vh] w-full bg-black opacity-30"></div>
        <Image
          src={signUpImage}
          width={1280}
          height={1000}
          alt="sign up image"
          className="block dark:hidden bg-cover bg-no-repeat object-cover object-center w-full h-full"
        />
      </div>
      <div className="lg:p-8">{children}</div>
    </div>
  );
}
