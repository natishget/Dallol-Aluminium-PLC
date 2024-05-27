import React from "react";
import facebook from '../../assets/facebook-black.svg'
import tele from '../../assets/telegram-black.svg'
import email from '../../assets/email.svg'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import linkedIn from '../../assets/linkedin-black.svg'
import '../style/SlideFwd.css'

const Contact2 = () => {
    return (
      <div className=' flex justify-center w-full '>
        <div className=" mt-28 md:relative shadow-lg shadow-slate-400 mb-10   border flex w-4/5  h-full">
            <div className="md:w-4/5 w-10/12 md:py-20 pt-12 static  bg-quinary h-full">
                <form action="" className="static text-tertiary md:ml-20 ml-10">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="md:mt-7 mt-5 w-3/5 text-sm">Feel free to contact us any time. we will get back to you as soon as we can.</p>
                    <input type="text" placeholder="Name" className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 my-4
                            focus:outline-none focus:border-primary_t focus:ring-1 text-primary"/><br />
                    <input type="email"  placeholder="Email" className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 mb-4
                            focus:outline-none focus:border-primary_t focus:ring-1"/> <br />
                    <input type="text" placeholder="Phone" className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5  mb-4
                            focus:outline-none focus:border-primary_t focus:ring-1"/><br />
                    <textarea name="" id="" placeholder="Message" className="border-b border-tertiary py-3 px-2 md:w-2/5 w-4/5 mb-4
                            focus:outline-none focus:border-primary_t focus:ring-1"></textarea><br />
                    <button className="border-b border-tertiary font-bold md:w-2/5 mb-10 w-4/5 hover:bg-tertiary  hover:text-primary duration-500 tracking-widest py-3">Send</button>
                </form>
                <div className="md:absolute md:right-0 md:top-28 font-bold text-sm pl-10 py-12 border border-tertiary bg-tertiary w-full  md:w-2/5 text-quaternary flex-col justify-center align-center">
                    <h3 className="mb-7 text-2xl  text-quinary">Info</h3>
                    <div className="mb-7 flex hover:text-primary hover:text-xl duration-500"> <img src={email} alt="" className="mr-2 w-4 " />dallolaluminium@gmail.com</div>
                    <div className="mb-7 flex"><img src={phone} alt="" className="mr-2 w-4" /> <div>
                        <div className="hover:text-primary hover:text-xl duration-500">+251 911 82 32 71</div>
                        <div className="hover:text-primary hover:text-xl duration-500">+251 903 23 24 25</div>
                        </div>
                        </div>
                    <div className="mb-7 flex"><img src={location} alt="" className="mr-2 w-4" /> Megenagna to Signal Street & 22 gollagol 
                    <br /> building Addis Ababa, Ethiopia </div>
                    <div className="mb-7">We are open from Monday to Friday <br /> 8:00AM - 6:00PM & Saturday 8:00AM - 4:00PM</div>
                </div>
            </div>
            <div className="bg-primary md:w-1/5 w-2/12  py-20 relative -z-10  ">
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
  