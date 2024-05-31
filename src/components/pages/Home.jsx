import React from 'react'
import { useTranslation } from "react-i18next"
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Home = () => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.0 });


  const [t, i18n] =  useTranslation("global")
  return (
    <div className='w-screen font-sans'>

      <div className='p-6 pt-44 flex w-screen justify-around text-sans pb-14'> 
      <div className='w-1/2'>
      
      <p className='text-6xl font-bold text-gray-700'>{t("home.header")}</p>
      <p className='mt-4 text-gray-600'>{t("home.paragraph")}</p>
      <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5 shadow-md transition duration-300 ease-in-out transform hover:scale-105'>{t("home.button")}</button>
      </div>
        <img src="src/img/one.png" alt="aluminum image" className='transition-transform'/>
      </div>
    
      <div className='bg-black text-white w-screen'>
        <p className='text-center text-5xl text-primary py-14 fony-bold font-bold brdere-r-6 '>{t("home.why")}</p>

        <div className='grid grid-cols-3 gap-x-8 place-items-center pb-16 pt-10 px-16'>

          <div >
            <img className='w-28 mx-auto hover:w-32 duration-300' src="src/img/onewhy.png" alt="commitment image" />
            <h3 className='font-bold text-2xl text-center text-primary pt-8'>{t("home.commitment")}</h3>
            <p className='mr-8 mt-4 text-center text-gray-200'>{t("home.paragraph1")}</p>
          </div>

          <div className='border-x-2 border-primary px-10'>
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/twowhy.png" alt="commitment image" />
            <h3 className='font-bold text-2xl text-center text-primary pt-4'>{t("home.industry")}</h3>
            <p className='mt-4 text-center text-gray-200'>{t("home.paragraph2")}</p>
          </div>

          <div >
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/threewhy.png" alt="quality image" />
            <h3 className='font-bold text-2xl text-center text-primary pt-4'>{t("home.quality")}</h3>
            <p className='ml-8 mt-4 text-center text-gray-200'>{t("home.paragraph3")}</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 text-gray-600 bg-gray-100 p-14 gap-x-6'>
        <div className='my-auto'>
          <h3 ref={elementRef} className={`font-bold text-gray-800 text-xl ${isVisible ? 'animate-slideForward' : ''}`}>{t("home.crafted")}</h3>
          <p ref={elementRef} className={`${isVisible ? 'animate-slideForward' : ''}`} >{t("home.paragraph4")}</p>
          <button ref={elementRef} className={`hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-4 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105 delay-700 ${isVisible ? 'animate-slide' : ''}`}>{t("home.button1")}</button>
        </div>
        <div ref={elementRef} className={`rounded-xl bg-gray-200 ${isVisible ? 'animate-slideToLeft' : ''}`}>
          <img className='rounded-t-xl w-84' src="src/img/oneimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>{t("home.card")}</h3>
            <p className='p-4'>{t("home.card-paragraph")}</p>
          </div>
        </div>

        <div ref={elementRef} className={`rounded-xl bg-gray-200 delay-300 ${isVisible ? 'animate-slideToLeft1' : ''}`}>
          <img className='rounded-t-xl' src="src/img/twoimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>{t("home.card1")}</h3>
            <p className='p-4'>{t("home.card1-paragraph")}</p>
          </div>
        </div>

        <div ref={elementRef} className={`rounded-xl bg-gray-200 delay-500 ${isVisible ? 'animate-slideToLeft2' : ''}`}>
          <img className='rounded-t-xl mx-auto' src="src/img/threeimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>{t("home.card2")}</h3>
            <p className='p-4'>{t("home.card2-paragraph")}</p>
          </div>
        </div>
      </div>

      <div className='pl-6 pt-10 flex w-screen justify-around text-sans'> 
      <div className='pl-10'>
      <p  className='text-4xl font-bold text-gray-700'>{t("home.discover")}</p>
      <p  className='mt-4 text-gray-600'>{t("home.discover-paragraph")}</p>
      <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5
              shadow-md transition duration-300 ease-in-out transform hover:scale-105'>{t("home.button2")}</button>
      </div>
        <img src="src/img/fourimg.png" alt="aluminum image" className='transition-transform w-1/2'/>
      </div>

    </div>
  )
}

export default Home
