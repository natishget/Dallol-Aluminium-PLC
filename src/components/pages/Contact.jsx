import React from 'react'
import target from '../../assets/target.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import telegram from '../../assets/telegram.svg'
import xtwitter from '../../assets/xtwitter.svg'




const Contact = () => {
  return (
    <div className='contact w-full h-screen '>
      <div className='w-full h-full bg-secondary_t text-primary  md:flex justify-center items-center '>
           
          <div className=' md:w-1/2  flex justify-center items-center '>
            <div className=' flex-col'>
              <h1 className='font-bold  text-5xl md:text-7xl pb-10 self-center'>Contact us</h1>
              <p className='pb-7'>Ask for a quotation from us!</p>
              <form action="">
                  <input type="text" className='input1 border-b bg-trans border-primary_t w-2/3 mb-5 py-2 placeholder-primary placeholder-sm
                  focus:outline-none focus:border-primary_t focus:ring-1 ' placeholder='Name'/><br />
                  <input type="Email" className='input1 border-b bg-trans border-primary_t w-2/3 mb-5 py-2 placeholder-primary placeholder-sm
                  focus:outline-none focus:border-primary_t focus:ring-1 ' placeholder='Email'/><br />
                  <input type="text"className='input1 border-b bg-trans border-primary_t w-2/3 mb-5 py-2 placeholder-primary placeholder-sm
                  focus:outline-none focus:border-primary_t focus:ring-1 ' placeholder='Phone '/><br />
                  <textarea name="" id="" className='input1 border-b bg-trans border-primary_t w-2/3 mb-5 py-2 placeholder-primary placeholder-sm
                  focus:outline-none focus:border-primary_t focus:ring-1 ' placeholder='your message'></textarea><br />
                  <button className='border border-primary bg-primary text-secondary_t font-bold px-3 py-1'>
                    SEND
                  </button>
              </form>
            </div>
          
          </div>
          <div className='flex md:w-1/2 mt-10 md:mt-0 myellow'>
            <img src={target} alt="" className='w-6 h-6 md:w-8 md:h-8 mx-4 md:mx-5'/>
            <div>
              <h4 className='font-bold'>Contact Information:</h4>
              <p className='text-sm py-3 pl-7'>Megenagna to Signal Street & <br />
                  22 gollagol building <br />
                  Addis Ababa, Ethiopia  </p>
              <h1 className='font-bold'>Call us:</h1>
              <p className='text-sm py-3 pl-7'>+251 911 82 32 71 <br /> +251 903 23 24 25 </p>
              <p className='text-sm py-3 '>We are open from Monday to Friday <br /> 8:00AM - 6:00PM & Saturday 8:00AM - 12:00AM</p>
              <h4>Follow us:</h4>
              <div className='flex mt-3'>
                <img src={facebook} alt="" className='ml-3 w-3 h-4' />
                <img src={linkedin} alt="" className='ml-3 w-4' />
                <img src={telegram} alt="" className='ml-3 w-4' />
                <img src={xtwitter} alt="" className='ml-3 w-4' />
                <img src={instagram} alt="" className='ml-3 w-4' />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Contact
