import Image from "next/image";
import chooseUs from "../../../../public/img/chooseUs.jpg";

export default function ChooseUs() {
  return (
    <div className="lg:grid gap-5 grid-cols-1 lg:grid-cols-2 mt-10 items-center">
      <div>
        <Image
          src={chooseUs}
          width={1920}
          height={1080}
          alt="trip4all choose us image"
          className="rounded-lg"
        />
      </div>
      <div className="p-4">
        {aboutUsContent.map((item, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const aboutUsContent = [
  {
    title: "Company Overview",
    text: "We are a passionate team dedicated to trip4all. Established in 2023, we have been serving travel with pride and commitment.",
  },

  {
    title: "Our Values",
    text: [
      "Integrity: We prioritize honesty and transparency in all our interactions.",
      "Innovation: Constantly pushing boundaries to bring you the latest and best solutions.",
      "Customer-Centric: Your satisfaction is at the core of everything we do.",
    ],
  },
  {
    title: "Expertise",
    text: [
      "Backed by years of experience, our team consists of industry experts with a deep understanding of [Your Industry/Niche].",
      "We leverage our knowledge to deliver exceptional [Products/Services] tailored to meet your unique needs.",
    ],
  },
  {
    title: "Quality Assurance",
    text: [
      "Committed to excellence, we adhere to the highest standards of quality in every aspect of our business.",
      "Our rigorous quality control ensures that you receive nothing but the best.",
    ],
  },
];
