import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip4all",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-100">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
