import BreadCrumbsContext from "@/components/ui/BreadCrumbsContext";
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
      <BreadCrumbsContext title="Contact Us" />
      <main className="container my-5">
        <ContactDetails />
        <GetTouchContact />
      </main>
      <GoogleMap />
      <Footer />
    </>
  );
}
