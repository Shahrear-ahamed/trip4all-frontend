import BreadCrumbsContext from "@/components/ui/BreadCrumbsContext";
import CountUpContext from "@/components/view/about-view/CountUpContext";
import Footer from "@/components/view/Footer";
import Navbar from "@/components/view/Navbar";
import ClientReview from "@/components/view/about-view/ClientReview";
import ChooseUs from "@/components/view/about-view/ChooseUs";
import Destinations from "@/components/view/about-view/Destinations";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <BreadCrumbsContext title="About Us" />
      <main className="container my-5">
        <section className="my-8 sm:my-12 md:my-16 lg:my-20">
          <h1 className="text-4xl font-semibold text-center">Why Choose us</h1>

          <ChooseUs />
        </section>

        <section className="my-8 sm:my-12 md:my-16 lg:my-20">
          <h2 className="text-4xl font-semibold text-center">Destinations</h2>
          <Destinations />
        </section>

        <section className="my-8 sm:my-12 md:my-16 lg:my-20">
          <h3 className="text-4xl font-semibold text-center">
            What People Say
          </h3>
          <ClientReview />
        </section>
      </main>

      <CountUpContext />

      <Footer />
    </>
  );
}
