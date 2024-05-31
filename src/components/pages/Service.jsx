import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Feature from "../Feature";
import Offer from "../Offer";
import Products from "../Products";
import Cta from "../Cta";
const content = [
  {
    title: "Aluminum Sheets and Plates",
    description:
      "Versatile and durable, aluminum sheets and plates are essential building blocks for various applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Aluminum Composite Panels",
    description:
      "Lightweight and weather-resistant, aluminum composite panels.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://media.istockphoto.com/id/1778278556/photo/aluminum-coils-on-mild-steel-zinc.jpg?s=2048x2048&w=is&k=20&c=bCy1bPl1BxSnZsjd06JkpU3Je-bFeIl67-80SkKT40s="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const Service = () => {
  return (
    <div className="">
      <div className="-mx-4 -mb-16 flex flex-wrap ">
        <div className="w-full px-4">
          <div className="mx-auto px-3 mt-5 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-[#dbc746] text-lg font-semibold text-primary">
              Our Services
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <Feature />
      <Cta />
      <div className="-mx-4 flex flex-wrap ">
        <div className="w-full px-4">
          <div className="mx-auto px-3 mt-5 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-[#dbc746] text-lg font-semibold text-primary">
              Explore
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Some of our products and services
            </h2>
          </div>
        </div>
      </div>
      <Products />
      {/* <StickyScroll className="bg-white" content={content} /> */}
      {/* <Offer /> */}
    </div>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
