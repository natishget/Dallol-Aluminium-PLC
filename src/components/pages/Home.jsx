import React, { useState } from 'react'
import { useTranslation } from "react-i18next"
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-router-dom';
import One from '../../img/one.png';
import ImgOne from '../../img/oneimg.png';
import ImgTwo from '../../img/twoimg.png';
import ImgThree from '../../img/threeimg.png';
import WhyOne from '../../img/onewhy.png';
import WhyTwo from '../../img/twowhy.png';
import WhyThree from '../../img/threewhy.png';
import ImgFour from '../../img/fourimg.png'



const Home = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  const onEnterViewport1 = () => {
    setVisible1(true);
  };

  const onExitViewport1 = () => {
    setVisible1(false);
  };

  const onEnterViewport2 = () => {
    setVisible2(true);
  };

  const onExitViewport2 = () => {
    setVisible2(false);
  };

  const onEnterViewport3 = () => {
    setVisible3(true);
  };

  const onExitViewport3 = () => {
    setVisible3(false);
  };

  const onEnterViewport4 = () => {
    setVisible3(true);
  };

  const onExitViewport4 = () => {
    setVisible3(false);
  };

  const [t, i18n] = useTranslation("global");
  return (

    <div className="w-full font-sans">
      <div className="lg:p-16 p-10 lg:pt-44 pt-32 lg:grid grid-cols-2 w-full text-sans pb-14">
        <div className="lg:pb-0 pb-14">
          <p className="md:text-6xl text-5xl font-bold text-gray-700">
            {t("home.header")}
          </p>
          <p className="mt-4 text-gray-600">{t("home.paragraph")}</p>
          <Link to="about">
            <button className="hover:bg-black bg-primary text-gray-900 hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              {t("home.button")}
            </button>
          </Link>
        </div>
        <div className="md:p-6 my-auto flex justify-end">
          <img
            src={One}
            alt="aluminum image"
            className="my-auto lg:mx-0 mx-auto"
          />
        </div>
      </div>

      <div className="bg-black text-white w-full">
        <p className="text-center lg:text-5xl text-3xl text-primary md:py-14 py-12 fony-bold font-bold brdere-r-6 ">
          {t("home.why")}
        </p>

        <div className="grid md:grid-cols-3 md:gap-x-8 place-items-center pb-16 md:pt-10 md:px-16 px-6 md:text-base text-sm text-gray-100">
          <div className="md:border-r-2 md:pb-0 pb-6 border-primary">
            <img
              className="w-28 mx-auto hover:w-32 duration-300"
              src={WhyOne}
              alt="commitment image"
            />
            <h3 className="md:mr-9 font-bold md:text-2xl text-xl text-center text-primary pt-8 mx-auto">
              {t("home.commitment")}
            </h3>
            <p className="md:mr-8 mt-4 text-center text-gray-200">
              {t("home.paragraph1")}
            </p>
          </div>

          <div className="md:pt-0 pt-6 md:pb-0 pb-6">
            <img
              className="w-32 mx-auto hover:w-36 duration-300"
              src={WhyTwo}
              alt="commitment image"
            />
            <h3 className="font-bold md:text-2xl text-xl text-center text-primary pt-4">
              {t("home.industry")}
            </h3>
            <p className="mt-4 text-center text-gray-200">
              {t("home.paragraph2")}
            </p>
          </div>

          <div className="md:border-l-2 border-primary md:pt-0 pt-6">
            <img
              className="w-32 mx-auto hover:w-36 duration-300"
              src={WhyThree}
              alt="quality image"
            />
            <h3 className="md:ml-8 font-bold md:text-2xl text-xl text-center text-primary pt-4">
              {t("home.quality")}
            </h3>
            <p className="md:ml-8 mt-4 text-center text-gray-200">
              {t("home.paragraph3")}
            </p>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 text-gray-600 bg-gray-100 md:p-14 p-8 lg:gap-x-6'>
        <div className='lg:my-auto mb-12'>
        <ScrollTrigger onEnter={onEnterViewport3} onExit={onExitViewport3}>
          <h3 className={`font-bold text-gray-800 text-xl ${visible3 ? 'animate-slideForward' : 'opacity-0'}`}>{t("home.crafted")}</h3>
          <p className={`mb-10 ${visible3 ? 'animate-slideForward' : 'opacity-0'}`}>{t("home.paragraph4")}</p>
        </ScrollTrigger>
        
        <ScrollTrigger onEnter={onEnterViewport3} onExit={onExitViewport3}>
          <Link to="service" className={`hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold
           py-2 mt-4 px-4 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105
           ${visible3 ? 'animate-slide2' : 'opacity-0'}`}>{t("home.button1")}</Link>
           </ScrollTrigger>
        </div>

        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <div className={`rounded-xl bg-gray-200 lg:mb-0 mb-12 ${visible ? 'animate-slideToLeft' : 'opacity-0'}`}>
          <img className='rounded-t-xl lg:w-84 lg:h-64' src={ImgOne} alt="" />
          <div>
            <h3 className="font-bold text-gray-800 text-xl pt-4 px-4">
              {t("home.card")}
            </h3>
            <p className="p-4">{t("home.card-paragraph")}</p>
          </div>
        </div>
        </ScrollTrigger>

        <ScrollTrigger onEnter={onEnterViewport1} onExit={onExitViewport1}>
        <div className={`rounded-xl bg-gray-200 lg:mb-0 mb-12 ${visible1 ? 'animate-slideToLeft1' : 'opacity-0'}`}>
          <img className='rounded-t-xl lg:w-84 lg:h-64' src={ImgTwo} alt="" />
          <div>
            <h3 className="font-bold text-gray-800 text-xl pt-4 px-4">
              {t("home.card1")}
            </h3>
            <p className="p-4">{t("home.card1-paragraph")}</p>
          </div>
        </div>
        </ScrollTrigger>

        <ScrollTrigger onEnter={onEnterViewport2} onExit={onExitViewport2}>
        <div className={`rounded-xl bg-gray-200 lg:mb-0 ${visible2 ? 'animate-slideToLeft2' : 'opacity-0'}`}>
          <img className='rounded-t-xl mx-auto lg:w-84 lg:h-64' src={ImgThree} alt="" />
          <div>
            <h3 className="font-bold text-gray-800 text-xl pt-4 px-4">
              {t("home.card2")}
            </h3>
            <p className="p-4">{t("home.card2-paragraph")}</p>
          </div>
        </div>
        </ScrollTrigger>


      </div>

      <div className='lg:pl-6 pt-10 lg:flex w-full justify-around text-sans'>
        <div className='lg:pl-10 md:px-10 lg:px-0 px-8'>
          <p className='md:text-4xl text-3xl font-bold text-gray-700'>{t("home.discover")}</p>
          <p className='mt-4 text-gray-600 mb-10'>{t("home.discover-paragraph")}</p>
          <Link to="contact" className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold
              py-2 mt-4 px-5 shadow-md transition duration-300  ease-in-out transform hover:scale-105'>{t("home.button2")}</Link>
        </div>
        <div className="pl-12 pt-14 -mt-32 lg:mt-0 lg:pt-0 lg:pl-0 flex justify-end lg:flex-none lg:pr-0">
          <img src="src/img/fourimg.png" alt="aluminum image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
