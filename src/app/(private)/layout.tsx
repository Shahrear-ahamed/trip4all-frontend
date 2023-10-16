"use client";

import { useState } from "react";
import DashboardNav from "@/components/ui/DashboardNav";
import Aside from "@/components/ui/Aside";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return (
    <html lang="en">
      <body className="flex">
        <DashboardNav toggleSideMenu={toggleSideMenu} />
        <main className="relative flex-1 overflow-y-auto flex gap-5">
          <Aside
            isSideMenuOpen={isSideMenuOpen}
            toggleSideMenu={toggleSideMenu}
          />
          <div className="my-5 max-w-[1200px] overflow-y-auto w-[90%] mx-auto max-h-[calc(100%-80px)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
