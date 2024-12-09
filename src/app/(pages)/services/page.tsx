import ServiceCard from "@/components/service/ServiceCard";
import React from "react";

export interface ServiceType {
  heading: string;
  image: string;
  paragraphs: string[];
}

const services: ServiceType[] = [
  {
    heading: "Revenue Maximization",
    image: "/service-money.jpeg",
    paragraphs: [
      "We begin with a thorough property audit to optimize your listing, followed by professional photography to capture the best of your property. ",
      "Our dynamic pricing strategy is designed to maximize your revenue, and we ensure high visibility by marketing your property across leading booking platforms. ",
      "This comprehensive package is aimed at enhancing your property's appeal and profitability.",
    ],
  },
  {
    heading: "Cleaning and Maintenance",
    image: "/service-money.jpeg",
    paragraphs: [
      "Our Cleaning & Maintenance services ensure your property is always at its best.",
      "We prioritize high standards of cleanliness and timely maintenance, ensuring every aspect of your property is in prime condition ",
      "This not only enhances guest experience but also preserves the long-term value of your property",
    ],
  },
  {
    heading: "Guest Satisfaction",
    image: "/service-money.jpeg",
    paragraphs: [
      "Guest Satisfaction is at the heart of our services.",
      "We offer 24-hour guest communication, ensuring that any inquiries or needs are promptly addressed at any time of the day or night.",
      "Our service is designed to provide seamless communication, personalized touches, and immediate response to guest requirements, enhancing their overall experience.",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-blue-500 w-full flex flex-col items-center justify-center px-2 py-4 gap-16 ">
      <h1 className="heading-2 !text-[2.2rem] lg:!text-[3.5rem] mt-[3.5rem] xl:mt-[8rem]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3 mt-[2rem]">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageUrl={service.image}
            heading={service.heading}
            paragraphs={service.paragraphs}
          />
        ))}
      </div>
      <button className="primary-button     max-md:!px-4 !bg-black !bg-opacity-70 hover:!bg-opacity-50 lg:!my-[5rem] !my-[2rem]" >
        Free Property Evaluation
      </button>
    </div>
  );
};

export default Services;
