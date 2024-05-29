import React from "react";

const About = () => {
  return (
    <div>
      {/* <!-- Hero --> */}
      <div className="bg-[#1f1f22]">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0] ">Dallol Aluminums:</span> Forging
            Aluminum Futures
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              Welcome to Dallol Aluminum, where the future is shaped through the
              fusion of industry expertise and innovation. Specializing in the
              trading of aluminum, we are dedicated to transforming raw
              materials into lucrative opportunities. With a focus on precision
              and reliability, Dallol Aluminum is your trusted partner in
              navigating the dynamic landscape of aluminum markets.
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
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Image Description"
            />
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                  We confront the hurdles unique to aluminum ventures
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  In addition to collaborating with emerging aluminum
                  enterprises to spearhead digital transformation, we&apos;ve
                  developed enterprise solutions tailored to address prevalent
                  challenges encountered within the industry.
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">Streamlined & rapid</span>{" "}
                    processing
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    Robust <span className="font-bold">functionalities</span>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    Focused on User Experience Enhancement
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
              ForgeTools: Empowering Aluminum Enterprises
            </h2>
            <p className="mt-3 text-gray-400">
              Unleash the potential of our versatile toolkit designed to meet
              the diverse needs of the aluminum industry.
            </p>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="10" height="14" x="3" y="8" rx="2" />
                <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                <path d="M8 18h.01" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-300">
                  Adaptable to industry demands
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-300">
                  Tailored customization options
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-semibold text-gray-300">
                  Dedicated support around the clock
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
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-4 md:col-span-3">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
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
