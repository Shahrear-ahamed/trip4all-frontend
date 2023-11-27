"use client";

import { useEffect, useState } from "react";
import DashboardNav from "@/components/ui/DashboardNav";
import Aside from "@/components/ui/Aside";
import { isLoggedIn } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import LoadingUi from "@/components/ui/loadingUi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/sign-in");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoadingUi />
      </div>
    );
  }

  return (
    <main className="flex flex-col">
      <DashboardNav toggleSideMenu={toggleSideMenu} />
      <section className="relative flex-1 overflow-y-auto flex gap-5">
        <Aside
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
        />
        <div className="m-5 ml-5 md:ml-0 pl-1 overflow-y-auto w-[90%] mx-auto max-h-[calc(100%-80px)]">
          {children}
        </div>
      </section>
    </main>
  );
}
