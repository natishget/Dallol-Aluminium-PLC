import React from 'react'
import target from '../assets/target.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import telegram from '../assets/telegram.svg'
import xtwitter from '../assets/xtwitter.svg'
import email from '../assets/email.svg'
import location from '../assets/location.svg'
import phone from '../assets/phone.svg'

const Footer = () => {
  return (
    
    <div className='w-full bg-tertiary  '>

      {/* first div */}
      <div className='text-xl  font-bold flex w-full justify-evenly items-center py-8 border-b border-quaternary rounded-full'>

        <div className='text-quaternary hidden md:block'>Get in touch</div>

        <div className='md:text-5xl text-4xl font-bold font text-quinary'>Dallol</div>

        <div className='flex'>

          <div className='md:w-10 md:h-10 w-8 h-8 border border-secondary_t rounded-full flex justify-center items-center mr-5 bg-secondary_t'>
            <img src={facebook} className=' w-5 h-5' alt="" />
          </div>
          <div className='md:w-10 md:h-10 w-8 h-8 border border-secondary_t rounded-full flex justify-center items-center mr-5 bg-secondary_t'>
            <img src={linkedin} alt="" className='w-5 h-5' />
          </div>
          <div className='md:w-10 md:h-10 w-8 h-8 border border-secondary_t rounded-full flex justify-center items-center bg-secondary_t'>

            <img src={telegram} alt="" className='w-5 h-5' />
          </div>
        </div>
      </div>
      {/* second div */}

      <div className='w-full md:flex md:justify-center md:items-center py-8 text-quaternary font-bold px-10'>
          <div className='flex-col md:w-1/3 w-full justify-center items-center '>
            <img src={email} alt="" className='w-6 pb-1' />
            <p className='text-primary'>MAIL</p> 
            <a href='mailto:dallolaluminium@gmail.com' className='md:text-sm hover:text-primary hover:text-xl duration-500'>dallolaluminium@gmail.com</a>
          </div>

          <div className='md:w-1/3 flex-col w-full  justify-center items-center mt-5'>   
            <img src={phone} alt="" className='w-5 pb-1' /> 
            <p className='text-primary'>CALL</p>
            <a href='tell:+251911823271' className='md:text-sm hover:text-primary hover:text-xl duration-500'>+251 911 82 32 71</a><br />
            <a href='tell:+251903232425' className='md:text-sm hover:text-primary hover:text-xl duration-500'>+251 903 23 24 25</a>
          </div>

          <div className='md:w-1/3 flex-col w-full justify-center items-center mt-5'> 
            <img src={location} alt="" className='w-5 pb-1' />
            <p className='text-primary'>FIND US</p>
            <p className='md:text-sm'>22 Town Square Mall 1st Floor</p>
            <p className='md:text-sm'>Megenagna to Signal Upper Nile - <br /> Real estate 1st Floor </p>  
          </div>

      </div>
      {/* third div */}
      <div className='flex justify-center py-8 border-t rounded-full border-quaternary text-quaternary text-sm  mt-2 md:mt-0'>

        <p> &copy; 2024 Dallol Aluminum All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer