import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export default function ContactDetails() {
  const contactDetails = [
    {
      icon: BsTelephoneFill,
      textOne: "+012 345 6789",
      textTwo: "+012 345 6789",
    },
    {
      icon: LuMail,
      textOne: "contact@trip4all.com",
      textTwo: "support@trip4all.com",
    },
    {
      icon: FaLocationDot,
      textOne: "4730 Crystal Springs Dr, Los Angeles, CA 90027, USA",
    },
  ];

  return (
    <div className="grid col-span-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center border px-5 py-10 rounded-md group hover:shadow-md duration-500 border-opacity-50 cursor-pointer">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full group-hover:bg-primary duration-500">
            <item.icon className="text-2xl group-hover:text-white duration-500" />
          </div>
          <div className="mt-10 marker:text-lg text-center">
            <p className="font-medium mb-2 text-gray-600">{item.textOne}</p>
            {item.textTwo && <p className="text-gray-500">{item.textTwo}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
