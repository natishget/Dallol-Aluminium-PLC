import { useTranslation } from "react-i18next";
import aboutF from "../../assets/aboutF.jpg";
import aboutL1 from "../../assets/aboutL1.jpg";
import aboutL2 from "../../assets/aboutL2.jpg";
import aboutP1 from "../../assets/aboutP1.jpg";
import aboutP2 from "../../assets/aboutP2.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Welcome to Dallol Aluminum, where industry expertise and innovation converge. As specialists in aluminum supply, we transform raw materials into valuable opportunities for our clients." />
        <link rel="canonical" href="/about" />
      </Helmet>
      {/* <!-- Hero --> */}
      <div className="bg-[#1f1f22]">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0] ">{t("about.header")}</span>{" "}
            {t("about.forging")}
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              {t("about.welcome")}
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}

      {/* features section 1 */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl shadow-2xl shadow-yellow-200"
              src={aboutF}
              alt="Image Description"
            />
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                  {t("about.confront")}
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  {t("about.addition")}
                </p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- List --> */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">{t("about.streamlined")}</span>{" "}
                    {t("about.processing")}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    {t("about.robust")}{" "}
                    <span className="font-bold">
                      {t("about.functionalities")}
                    </span>
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    {t("about.focus")}
                  </span>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>

      {/* features section 2 */}
      <div className="bg-[#1f1f22]">
        <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Title --> */}
          <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-200 font-bold">
              {t("about.forgtool")}
            </h2>
            <p className="mt-3 text-gray-400">{t("about.unleash")}</p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
            {/* <!-- Icon Block --> */}
            <div className="col-span-6 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-[#ff0]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="10" height="14" x="3" y="8" rx="2" />
                <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                <path d="M8 18h.01" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-300">
                  {t("about.adaptable")}
                </h3>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="col-span-6 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-[#ff0]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-300">
                  {t("about.tailored")}
                </h3>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
              <svg
                className="mx-auto h-auto w-7 md:w-9 text-[#ff0]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-300">
                  {t("about.dedicated")}
                </h3>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- Grid --> */}
          <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
            <div className="hidden md:block col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src={aboutL1}
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-4 h-[80%] overflow-hidden rounded-xl md:col-span-3">
              <img
                className="rounded-xl "
                src={aboutP1}
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src={aboutP2}
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src={aboutL2}
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>

      {/* Sticky scroll animation */}
    </div>
  );
};

export default About;
