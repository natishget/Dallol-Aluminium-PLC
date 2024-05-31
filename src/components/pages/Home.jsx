import React from 'react'
import { useTranslation } from "react-i18next"
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Home = () => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.0 });


  const [t, i18n] =  useTranslation("global")
  return (
    <div className='w-full font-sans'>

      <div className='lg:p-16 p-10 lg:pt-44 pt-32 lg:grid grid-cols-2 w-full text-sans pb-14'>
        <div className='lg:pb-0 pb-14'>
          <p className='md:text-6xl text-5xl font-bold text-gray-700'>{t("home.header")}</p>
          <p className='mt-4 text-gray-600'>{t("home.paragraph")}</p>
          <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5 shadow-md transition duration-300 ease-in-out transform hover:scale-105'>{t("home.button")}</button>
        </div>
        <div className='md:p-6 my-auto flex justify-end'>
          <img src="src/img/one.png" alt="aluminum image" className='my-auto lg:mx-0 mx-auto' />
        </div>
      </div>

      <div className='bg-black text-white w-full'>
        <p className='text-center lg:text-5xl text-3xl text-primary md:py-14 py-12 fony-bold font-bold brdere-r-6 '>{t("home.why")}</p>

        <div className='grid md:grid-cols-3 md:gap-x-8 place-items-center pb-16 md:pt-10 md:px-16 px-6 md:text-base text-sm text-gray-100'>

          <div className='md:border-r-2 md:pb-0 pb-6 border-primary'>
            <img className='w-28 mx-auto hover:w-32 duration-300' src="src/img/onewhy.png" alt="commitment image" />
            <h3 className='md:mr-9 font-bold md:text-2xl text-xl text-center text-primary pt-8 mx-auto'>{t("home.commitment")}</h3>
            <p className='md:mr-8 mt-4 text-center text-gray-200'>{t("home.paragraph1")}</p>
          </div>

          <div className='md:pt-0 pt-6 md:pb-0 pb-6'>
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/twowhy.png" alt="commitment image" />
            <h3 className='font-bold md:text-2xl text-xl text-center text-primary pt-4'>{t("home.industry")}</h3>
            <p className='mt-4 text-center text-gray-200'>{t("home.paragraph2")}</p>
          </div>

          <div className='md:border-l-2 border-primary md:pt-0 pt-6'>
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/threewhy.png" alt="quality image" />
            <h3 className='md:ml-8 font-bold md:text-2xl text-xl text-center text-primary pt-4'>{t("home.quality")}</h3>
            <p className='md:ml-8 mt-4 text-center text-gray-200'>{t("home.paragraph3")}</p>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 text-gray-600 bg-gray-100 md:p-14 p-8 lg:gap-x-6'>
        <div className='lg:my-auto mb-12'>
          <h3 className='font-bold text-gray-800 text-xl'>{t("home.crafted")}</h3>
          <p>{t("home.paragraph4")}</p>
          <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-4 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>{t("home.button1")}</button>
        </div>

        <div className='rounded-xl bg-gray-200 lg:mb-0 mb-12'>
          <img className='rounded-t-xl lg:w-84 lg:h-64' src="src/img/oneimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>{t("home.card")}</h3>
            <p className='p-4'>{t("home.card-paragraph")}</p>
          </div>
        </div>

        <div className='rounded-xl bg-gray-200 lg:mb-0 mb-12'>
          <img className='rounded-t-xl lg:w-84 lg:h-64' src="src/img/twoimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>{t("home.card1")}</h3>
            <p className='p-4'>{t("home.card1-paragraph")}</p>
          </div>
        </div>

        <div className='rounded-xl bg-gray-200 lg:mb-0'>
          <img className='rounded-t-xl mx-auto lg:w-84 lg:h-64' src="src/img/threeimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>{t("home.card2")}</h3>
            <p className='p-4'>{t("home.card2-paragraph")}</p>
          </div>
        </div>
      </div>

      <div className='lg:pl-6 pt-10 lg:flex w-full justify-around text-sans'>
        <div className='lg:pl-10 md:px-10 lg:px-0 px-8'>
          <p className='md:text-4xl text-3xl font-bold text-gray-700'>{t("home.discover")}</p>
          <p className='mt-4 text-gray-600'>{t("home.discover-paragraph")}</p>
          <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5 shadow-md transition duration-300 ease-in-out transform hover:scale-105'>{t("home.button2")}</button>
        </div>
        <div className='lg:pl-0 pl-12 pt-14 -mt-32 lg:mt-0 lg:pt-0 lg:pl-0 flex justify-end lg:flex-none lg:pr-0'>
          <img src="src/img/fourimg.png" alt="aluminum image" className='' />
        </div>
        
      </div>

    </div>
  )
}

export default Home
