import ContactDetails from "@/components/view/contact-view/ContactDetails";
import GetTouchContact from "@/components/view/contact-view/GetTouchContact";
import GoogleMap from "@/components/view/contact-view/GoogleMap";
import Footer from "@/components/view/Footer";
import Navbar from "@/components/view/Navbar";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-600 bg-opacity-40 py-16 md:py-20 mb-10">
        <h1 className="text-3xl md:text-4xl uppercase text-center font-semibold text-gray-700">
          Contact
        </h1>
      </div>
      <main className="container my-5">
        <ContactDetails />
        <GetTouchContact />
      </main>
      <GoogleMap />
      <Footer />
    </>
  );
}
