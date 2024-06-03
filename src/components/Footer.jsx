import React from "react";
import target from "../assets/target.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import xtwitter from "../assets/xtwitter.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import E2N from "../assets/E2N-2.png";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-full bg-tertiary  ">
      {/* first div */}
      <div className="text-xl  font-bold flex w-full justify-evenly items-center py-8 border-b border-quaternary rounded-full">
        <div className="text-quaternary hidden md:block">
          {t("footer.getintouch")}
        </div>

        <div className="md:text-5xl text-4xl font-bold font text-quinary">
          {t("footer.header")}
        </div>

        <div className="flex">
          <div className="md:w-10 md:h-10 w-8 h-8 border border-secondary_t rounded-full flex justify-center items-center mr-5 bg-secondary_t">
            <img src={facebook} className=" w-5 h-5" alt="" />
          </div>
          <div className="md:w-10 md:h-10 w-8 h-8 border border-secondary_t rounded-full flex justify-center items-center mr-5 bg-secondary_t">
            <img src={linkedin} alt="" className="w-5 h-5" />
          </div>
          <div className="md:w-10 md:h-10 w-8 h-8 border border-secondary_t rounded-full flex justify-center items-center bg-secondary_t">
            <img src={telegram} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
      {/* second div */}

      <div className="w-full md:flex  items-center justify-evenly py-8 text-quaternary font-bold px-10">
        <div className="flex-col   items-center ">
          <img src={email} alt="" className="w-6 pb-1" />
          <p className="text-primary">{t("footer.mail")}</p>
          <a
            href="mailto:dallolaluminium@gmail.com"
            className="md:text-sm hover:text-primary hover:text-xl duration-500"
          >
            dallolaluminium@gmail.com
          </a>
        </div>

        <div className=" flex-col   justify-center items-center mt-5">
          <img src={phone} alt="" className="w-5 pb-1" />
          <p className="text-primary">{t("footer.call")}</p>
          <a
            href="tell:+251911823271"
            className="md:text-sm hover:text-primary hover:text-xl duration-500"
          >
            +251 911 82 32 71
          </a>
          <br />
          <a
            href="tell:+251903232425"
            className="md:text-sm hover:text-primary hover:text-xl duration-500"
          >
            +251 903 23 24 25
          </a>
        </div>

        <a
          href="https://www.google.com/maps/place/Town+Square+Mall+%7C+Haya+Hulet+%7C+%E1%89%B3%E1%8B%89%E1%8A%95+%E1%88%B5%E1%8A%AD%E1%8B%8C%E1%88%AD+%E1%88%9E%E1%88%8D+%7C+%E1%88%83%E1%8B%AB+%E1%88%81%E1%88%88%E1%89%B5/@9.0148139,38.784972,17z/data=!3m1!4b1!4m6!3m5!1s0x164b85362ab5f55d:0xde0828f7bbb11807!8m2!3d9.0148139!4d38.7875469!16s%2Fg%2F11j7z2r5fy?entry=ttu"
          className=" flex-col justify-center items-center mt-5 hover:text-primary duration-500"
        >
          <img src={location} alt="" className="w-5 pb-1" />
          <p className="text-primary">{t("footer.find")}</p>
          <p className="md:text-sm">{t("footer.location")}</p>
          <p className="md:text-sm">{t("footer.location1")} </p>
          <p className="md:text-sm"> {t("footer.location2")}</p>
        </a>
      </div>
      {/* third div */}
      <div className="flex justify-center py-8 border-t rounded-full border-quaternary text-quaternary text-sm  mt-2 md:mt-0">
        <p> &copy; 2024 Dallol Aluminum All rights Reserved</p>
      </div>
      <div className="flex md:flex-row justify-between items-center bg-gray-100 w-full md:px-4 text-gray-800">
        <div className="font-bold flex items-center md:text-base text-sm">
          Powered By
          <div className="text-orange-400 flex md:text-base text-sm">
            <span>
              <img className="w-3 pt-1 ml-2" src={E2N} alt="E2N LOGO" />
            </span>
            2N
          </div>
        </div>
        <a
          className="hover:text-orange-400 font-bold pr-2 text-sm md:text-base"
          href="tg://resolve?domain=E2NwebDesign"
        >
          Get in touch with us
        </a>
      </div>
    </div>
  );
};

export default Footer;
