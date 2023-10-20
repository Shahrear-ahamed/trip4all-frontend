import Footer from "@/components/view/Footer";
import Navbar from "@/components/view/Navbar";
import HeroSlider from "@/components/view/home-view/HeroSlider";
import Tours from "@/components/view/home-view/Tours";
import WhatWeProvide from "@/components/view/home-view/WhatWeProvide";
import TeamMember from "@/components/view/home-view/TeamMember";
import WhatWeOffer from "@/components/view/home-view/WhatWeOffer";
import BlogSidebar from "@/components/view/blog-view/BlogSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <WhatWeProvide />
      <Tours status="ongoing" title="Available" />
      <Tours status="upcoming" title="Upcoming" />
      <TeamMember />
      <section className="container mx-auto my-10">
        <BlogSidebar title="Our Blogs" variant="horizontal" totalBlog={4} />
      </section>
      <WhatWeOffer />
      <Footer />
    </>
  );
}
