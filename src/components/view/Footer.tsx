import React from "react";
import FooterTop from "../ui/FooterTop";
import FooterBottom from "../ui/FooterBottom";

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
          <FooterTop />
        <hr className="my-3 border-gray-200 md:my-8 dark:border-gray-700" />

        <FooterBottom />
      </footer>
    </>
  );
}
