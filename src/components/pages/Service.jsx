import Feature from "../Feature";
import Products from "../Products";
import Cta from "../Cta";
import { useTranslation } from "react-i18next";
// const content = [
//   {
//     title: "Aluminum Sheets and Plates",
//     description:
//       "Versatile and durable, aluminum sheets and plates are essential building blocks for various applications.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Aluminum Composite Panels",
//     description:
//       "Lightweight and weather-resistant, aluminum composite panels.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <img
//           src="https://media.istockphoto.com/id/1778278556/photo/aluminum-coils-on-mild-steel-zinc.jpg?s=2048x2048&w=is&k=20&c=bCy1bPl1BxSnZsjd06JkpU3Je-bFeIl67-80SkKT40s="
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];

const Service = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="pt-28">
      <div className="-mx-4 -mb-12 flex flex-wrap ">
        <div className="w-full px-4">
          <div className="mx-auto px-3 mt-5 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              {t("service.our")}
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              {t("service.what")}
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              {t("service.at")}
            </p>
          </div>
        </div>
      </div>
      <Feature />
      <Cta />
      <div className="-mx-4 flex flex-wrap ">
        <div className="w-full px-4">
          <div className="mx-auto px-3 mt-5 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              {t("service.explore")}
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              {t("service.some")}
            </h2>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Service;
