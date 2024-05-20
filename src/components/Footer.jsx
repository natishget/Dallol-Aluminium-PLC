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
        <div className='text-quaternary'>Get in touch</div>

        <div className='text-5xl font-bold font text-quinary'>Dallol</div>

        <div className='flex'>

          <div className='w-10 h-10 border border-secondary_t rounded-full flex justify-center items-center mr-5 bg-secondary_t'>
            <img src={facebook} className=' w-5 h-5' alt="" />
          </div>
          <div className='w-10 h-10 border border-secondary_t rounded-full flex justify-center items-center mr-5 bg-secondary_t'>
            <img src={linkedin} alt="" className='w-5 h-5' />
          </div>
          <div className='w-10 h-10 border border-secondary_t rounded-full flex justify-center items-center bg-secondary_t'>
            <img src={telegram} alt="" className='w-5 h-5' />
          </div>
        </div>
      </div>
      {/* second div */}
      <div className='flex  justify-center w-full   py-8 text-quaternary font-bold px-10'>
        <div className='flex w-1/3 justify-center '>
          <div className='flex-col justify-center items-center'>
          <img src={email} alt="" className='w-6 pb-1' />
          <p className='text-primary'>MAIL</p>
          <a href='' className='text-sm'>dallolaluminium@gmail.com</a>
          </div>
        </div>

        <div className='w-1/3 flex  justify-center'>
          <div className=''>
            <img src={phone} alt="" className='w-5 pb-1' />
            <p className='text-primary'>CALL</p>
            <a href='' className='text-sm'>+251 911 82 32 71</a><br />
            <a href='' className='text-sm'>+251 903 23 24 25</a>
          </div>
        </div>

        <div className='w-1/3 flex justify-center items-center  '>
          <div>
            <img src={location} alt="" className='w-5 pb-1' />
            <p className='text-primary'>FIND US</p>
            <p className='text-sm'>22 Town Square Mall 1st Floor</p>
            <p className='text-sm'>Megenagna to Signal Upper Nile - <br /> Real estate 1st Floor </p>  
          </div>
        </div>

      </div>
      {/* third div */}
      <div className='flex justify-center py-8 border-t rounded-full border-quaternary text-quaternary text-sm'>
        <p> &copy; 2024 Dallol Aluminum All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer