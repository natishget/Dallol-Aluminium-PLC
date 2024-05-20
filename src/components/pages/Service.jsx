import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
const content = [
  {
    title: "Aluminum Sheets and Plates",
    description:
      "Versatile and durable, aluminum sheets and plates are essential building blocks for various applications, from aerospace components to architectural facades.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Aluminum Composite Panels",
    description:
      "Lightweight and weather-resistant, aluminum composite panels are the material of choice for modern architectural cladding, signage, and interior design projects.",
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
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
      <StickyScroll className="bg-white" content={content} />
    </div>
  );
};

export default Service;
