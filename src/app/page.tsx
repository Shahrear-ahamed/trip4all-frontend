import Footer from "@/components/view/Footer";
import Navbar from "@/components/view/Navbar";
import HeroSlider from "@/components/view/home-view/HeroSlider";
import HotTours from "@/components/view/home-view/HotTours";
import WhatWeProvide from "@/components/view/home-view/WhatWeProvide";
import TeamMember from "@/components/view/home-view/TeamMember";
import WhatWeOffer from "@/components/view/home-view/WhatWeOffer";
import OurServiceHome from "@/components/view/home-view/OurServiceHome";
import BlogSidebar from "@/components/view/blog-view/BlogSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <OurServiceHome />
      <WhatWeProvide />
      <HotTours />
      <TeamMember />
      <section className="container mx-auto my-10">
        <BlogSidebar title="Our Blogs" variant="horizontal" totalBlog={4} />
      </section>
      <WhatWeOffer />
      <Footer />
    </>
  );
}
