import CustomAvatar from "@/components/ui/CustomAvatar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export default function TeamMember() {
  const members = [
    {
      name: "Jill Peterson",
      designation: "Tour Consultant",
      phone: "+1 323-913-4688",
    },
    {
      name: "John Smith",
      designation: "Adventure Guide",
      phone: "+1 555-123-4567",
    },
    {
      name: "Alice Johnson",
      designation: "Travel Coordinator",
      phone: "+1 987-654-3210",
    },
    {
      name: "Robert Miller",
      designation: "Expedition Planner",
      phone: "+1 111-222-3333",
    },
  ];
  return (
    <section className="container my-20">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold my-10">
        Different People — One Mission
      </h2>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative max-w-[220px] w-full hover:shadow-md px-5 py-8 rounded-md duration-300 bg-white mt-14">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CustomAvatar
                className="h-20 w-20 my-5 rounded-full border-2 border-primary"
                AltName={member.name}
              />
            </div>

            <div className="mt-10 text-center text-lg space-y-2">
              <h5>{member.name}</h5>
              <span className="text-sm text-primary inline-block">
                {member.designation}
              </span>
              <p>{member.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
