import { VscSettings } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { AiOutlineWallet, AiOutlineFire } from "react-icons/ai";

export default function WhatWeProvide() {
  const ourServiceData = [
    {
      title: "Personalized Matching",
      description:
        "Our unique matching system lets you find just the tour you want for your next holiday.",
      icon: VscSettings,
    },
    {
      title: "Wide Variety of Tours",
      description:
        "We offer a wide variety of personally picked tours with destinations all over the globe.",
      icon: SlBadge,
    },
    {
      title: "Highly Qualified Service",
      description:
        "Our tour managers are qualified, skilled, and friendly to bring you the best service.",
      icon: AiOutlineStar,
    },
    {
      title: "24/7 Support",
      description:
        "You can always get professional support from our staff 24/7 and ask any question you have",
      icon: BiSupport,
    },
    {
      title: "Handpicked Hotels",
      description:
        "Our team offers only the best selection of affordable and luxury hotels to our clients.",
      icon: AiOutlineFire,
    },
    {
      title: "Personalized Matching",
      description:
        "Our unique matching system lets you find just the tour you want for your next holiday.",
      icon: AiOutlineWallet,
    },
  ];
  return (
    <section className="container my-10">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Our Service
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {ourServiceData?.map((item, index) => (
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between space-y-5 px-6 py-10 bg-white hover:shadow-lg duration-500 rounded-md"
            key={index}>
            <div className="mr-7">
              <item.icon className="text-5xl text-primary" />
            </div>
            <div className="w-full">
              <h3 className="text-xl text-gray-700 font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
