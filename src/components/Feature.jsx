import Beam from "../assets/beam.png";
import Installation from "../assets/installation.png";
import Aluminum from "../assets/metal.png";
import aluminumWorks from "../assets/metalworking.png";
import Roof from "../assets/roof.png";
import Rails from "../assets/footsteps.png";
import { useTranslation } from "react-i18next"

const Feature = () => {
  const [t, i18n] =  useTranslation("global")
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-amber-200 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Aluminum} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
            {t("service.solutions")}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            {t("service.paragraph")}
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Beam} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
            {t("service.accessories")}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            {t("service.paragraph1")}
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Rails} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">{t("service.hand")}</h6>
            <p className="mb-3 text-sm text-gray-900">
            {t("service.paragraph2")}
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Roof} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
            {t("service.composite")}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            {t("service.paragraph3")}
            </p>
          </div>
        </div>
        <div className="p-8 border-amber-200 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={Installation} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
            {t("service.supply")}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            {t("service.paragraph4")}
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <img src={aluminumWorks} alt="" />
            </div>
            <h6 className="mb-2 font-semibold text-lg leading-5">
            {t("service.aluminium")}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            {t("service.paragraph5")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
