import React, { useState } from "react";
import facebook from "../../assets/facebook-black.svg";
import tele from "../../assets/telegram-black.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import linkedIn from "../../assets/linkedin-black.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useTranslation } from "react-i18next";
import ScrollTrigger from "react-scroll-trigger";
import { Helmet } from "react-helmet-async";

const Contact2 = () => {
  const [data, setData] = useState({ fname: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.fname === "" || data.phone === "" || data.message === "") {
      alert("please fill the form properly");
    } else {
      const myMessage = `service request: %0A - Full Name: ${data.fname}%0A - Email: ${data.email}%0A - Phone: ${data.phone}%0A - Message: ${data.message}`;

      const token = "7478245831:AAGn8rFLJkCZDDTpE8OQvN1q1dAGgw-7v2U";
      const chat_id = -1002232894996;
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${myMessage}&parse_mode=html`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      alert("Sent successfully    Thank You!!!");
    }
  }

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onEnterViewport1 = () => {
    setVisible1(true);
  };

  const [t, i18n] = useTranslation("global");
  return (
    <div className="  flex justify-center w-full">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Feel free to contact us any time. we will get back to you as soon as we can." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {/* the main box */}
      <div className=" mt-28 md:relative shadow-lg shadow-slate-400 mb-10   border flex w-4/5  h-full">
        {/* the white box */}
        <div className="md:w-4/5 w-10/12 md:py-20 pt-12 static  bg-quinary h-full">
          {/* the left box(the form) */}
          <ScrollTrigger onEnter={onEnterViewport}>
            <form
              action="#"
              method="post"
              onSubmit={handleSubmit}
              className={`static text-tertiary md:ml-20 ml-10 ${visible ? "animate-slide" : "opacity-0"
                }`}
            >
              <h1 className="text-4xl font-bold">{t("contact.header")}</h1>
              <p className="md:mt-7 mt-5 w-3/5 text-sm">
                {t("contact.paragraph")}
              </p>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={handleChange}
                value={data.fname}
                placeholder={t("contact.name")}
                className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 my-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"
              />
              <br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder={t("contact.email")}
                className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 mb-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"
              />{" "}
              <br />
              <input
                type="tell"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={data.phone}
                placeholder={t("contact.phone")}
                className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5  mb-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"
              />
              <br />
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={data.message}
                placeholder={t("contact.text")}
                className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 mb-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"
              ></textarea>
              <br />
              <input
                type="submit"
                value={t("contact.send")}
                className="border-b border-tertiary font-bold md:w-2/5 mb-10 w-4/5 hover:bg-tertiary
                            hover:text-primary duration-500 tracking-widest py-3"

              />
            </form>


            {/* the info box */}

            <div
              className={`md:absolute md:right-0 md:top-28 font-bold text-sm pl-10 py-12 border
                            border-tertiary bg-tertiary w-full  md:w-2/5 text-quaternary flex-col justify-center align-center 
                            ${visible ? "animate-slideForward" : "opacity-0"}`}
            >
              <h3 className="mb-7 text-2xl  text-quinary">
                {t("contact.info")}
              </h3>
              <a
                href="mailto:dallolaluminium@gmail.com"
                className="mb-7 flex hover:text-primary hover:text-xl duration-500"
              >
                {" "}
                <img src={email} alt="" className="mr-2 w-4 " />
                dallolaluminium@gmail.com
              </a>
              <div className="mb-7 flex">
                <img src={phone} alt="" className="mr-2 w-4" />
                <div>
                  <a
                    href="tel: +251993616161"
                    className="hover:text-primary hover:text-xl duration-500"
                  >
                    +251 993 61 61 61
                  </a>{" "}
                  <br />
                  <a
                    href="tel: +251903232425"
                    className="hover:text-primary hover:text-xl duration-500"
                  >
                    +251 903 23 24 25
                  </a> <br />
                  <p>{t("contact.Additional")}</p>
                  <a
                    href="tel: +251911823271"
                    className="hover:text-primary hover:text-xl duration-500"
                  >
                    +251 911 82 32 71
                  </a>{" "}
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Upper+Nile+Real+estate/@9.0210905,38.7922563,17z/data=!3m1!4b1!4m6!3m5!1s0x164b85f566992eeb:0x5d2835e77a5b2bfd!8m2!3d9.0210905!4d38.7922563!16s%2Fg%2F11tp520dn6?entry=ttu"
                target="_blank"
                className="hover:text-primary duration-500 mb-7 mr-16 flex"
              >
                <img src={location} alt="" className="mr-2 w-4" />
                1# {t("contact.location")} <br />
                2# {t("contact.location1")}
              </a>
              <div className="mb-7 mx-8">{t("contact.hour")}</div>
            </div>
          </ScrollTrigger>
        </div>
        {/* the yellow box */}
        <div className="bg-primary md:w-1/5 w-2/12  py-20 relative -z-10  ">
          {/* the div holding the three images */}
          <div className="absolute bottom-0 md:flex  w-full justify-center items-center md:ml-0 ml-5 mb-5">
            <img
              src={facebook}
              alt=""
              className="md:w-5 md:h-5 w-9 h-9 pb-3 md:mr-3 md:pb-0"
            />
            <img src={linkedIn} alt="" className="w-5 mr-3 pb-3 md:pb-0" />
            <img src={tele} alt="" className="w-5 mr-3 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
