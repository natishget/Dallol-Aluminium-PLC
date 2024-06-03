import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Cta = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="bg-[#28292D] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="mb-3 font-semibold text-yellow-400 md:mb-6 md:text-lg xl:text-xl">
              {t("service.ready")}
            </p>

            <h1 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:mb-12 md:text-5xl">
              {t("service.revolutionize")}
            </h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="tel: +251911823271"
                className="inline-block rounded-lg bg-yellow-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-yellow-500 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                {t("service.button")}
              </a>
              <Link
                to="/contact"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                {t("service.button1")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
