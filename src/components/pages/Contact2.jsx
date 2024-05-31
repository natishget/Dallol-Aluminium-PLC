import React from "react";
import facebook from '../../assets/facebook-black.svg'
import tele from '../../assets/telegram-black.svg'
import email from '../../assets/email.svg'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import linkedIn from '../../assets/linkedin-black.svg'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useTranslation } from "react-i18next"





const Contact2 = () => {
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.0, // Adjust the threshold as needed
      });

      const [t, i18n] =  useTranslation("global")
    return (
    
      <div className='  flex justify-center w-full'>
        {/* the main box */}
        <div className=" mt-28 md:relative shadow-lg shadow-slate-400 mb-10   border flex w-4/5  h-full">
            {/* the white box */}
            <div className="md:w-4/5 w-10/12 md:py-20 pt-12 static  bg-quinary h-full">
                {/* the left box(the form) */}
                <form action="" ref={elementRef} className={`static text-tertiary md:ml-20 ml-10 ${isVisible ? 'animate-slide' : ''}`}>
                    <h1 className="text-4xl font-bold">{t("contact.header")}</h1>
                    <p className="md:mt-7 mt-5 w-3/5 text-sm">{t("contact.paragraph")}</p>
                    <input type="text" placeholder={t("contact.name")} className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 my-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"/><br />
                    <input type="email"  placeholder={t("contact.email")} className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 mb-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"/> <br />
                    <input type="text" placeholder={t("contact.phone")} className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5  mb-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"/><br />
                    <textarea name="" id="" placeholder={t("contact.text")} className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 mb-4
                            focus:outline-none focus:border-trans focus:ring-1 focus:ring-slate-400 duration-500"></textarea><br />
                    <button className="border-b border-tertiary font-bold md:w-2/5 mb-10 w-4/5 hover:bg-tertiary  hover:text-primary duration-500 tracking-widest py-3">{t("contact.send")}</button>
                </form>
                {/* the info box */}
                <div ref={elementRef} className={`md:absolute md:right-0 md:top-28 font-bold text-sm pl-10 py-12 border
                            border-tertiary bg-tertiary w-full  md:w-2/5 text-quaternary flex-col justify-center align-center ${isVisible ? 'animate-slideForward' : ''}`}>
                    <h3 className="mb-7 text-2xl  text-quinary">{t("contact.info")}</h3>
                    <a href="mailto:dallolaluminium@gmail.com" className="mb-7 flex hover:text-primary hover:text-xl duration-500"> <img src={email} alt="" className="mr-2 w-4 " />dallolaluminium@gmail.com</a>
                    <div className="mb-7 flex"><img src={phone} alt="" className="mr-2 w-4" />
                        <div>
                            <a href="tell:+251911823271" className="hover:text-primary hover:text-xl duration-500">+251 911 82 32 71</a> <br />
                            <a href="tell:+251903232425" className="hover:text-primary hover:text-xl duration-500">+251 903 23 24 25</a>
                        </div>
                    </div>
                    <a href="https://www.google.com/maps/place/Upper+Nile+Real+estate/@9.0210905,38.7922563,17z/data=!3m1!4b1!4m6!3m5!1s0x164b85f566992eeb:0x5d2835e77a5b2bfd!8m2!3d9.0210905!4d38.7922563!16s%2Fg%2F11tp520dn6?entry=ttu"
                     target="_blank" className="hover:text-primary hover:text-xl duration-500 mb-7 mr-16 flex"><img src={location} alt="" className="mr-2 w-4" />{t("contact.location")}</a>
                    <div className="mb-7 mx-8">{t("contact.hour")}</div>
                </div>
            </div>
            {/* the yellow box */}
            <div className="bg-primary md:w-1/5 w-2/12  py-20 relative -z-10  ">
                {/* the div holding the three images */}
                <div className="absolute bottom-0 md:flex  w-full justify-center items-center md:ml-0 ml-5 mb-5">
                    <img src={facebook} alt="" className="md:w-5 md:h-5 w-9 h-9 pb-3 md:mr-3 md:pb-0" />
                    <img src={linkedIn} alt="" className="w-5 mr-3 pb-3 md:pb-0" />
                    <img src={tele} alt="" className="w-5 mr-3 " />
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Contact2
  