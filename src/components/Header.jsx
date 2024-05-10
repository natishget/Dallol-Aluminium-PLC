import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ENG'); // Set the default selected option here

  const options = ['ENG', 'AMH'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
    <div className='text-logoC w-screen font-sans'>

      <div className='flex'>

        <div className='bg-white/30 background-blur-lg flex-none h-16'>
          <h1 className='w-6'></h1>
        </div>

        <div className='w-screen bg-white/30 background-blur-lg text-black'>
          <div className='bg-white/30 background-blur-lg flex-1 flex justify-between pt-6 pb-5 mt-4 rounded-lg'>

            <div className='flex justify-center pl-6'>
              <img src="../logo.png" alt="" className='w-12 h-12' />
              <h3 className='pl-1 flex items-center text-lg font-semibold'>Dallol Aluminium</h3>
            </div>

            <div className='flex pt-2 font-semibold text-lg pr-6 items-center'>
              <a to="/index" className='pr-3'> Home </a>
              <a to="/about" className='pr-3'> About Us</a>
              <a to="/service" className='pr-3'> Services </a>
              <a to="/contact" className='pr-3'> Contact Us</a>

            <div className="w-20">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-lg border border-white/40 bg-logoC px-4 py-2 text-sm font-semibold text-black focus:outline-none"
                    id="options-menu"
                    aria-expanded="true"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selectedOption}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5 transform rotate-180 -mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 11a1 1 0 0 1-1-1V4.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L11 4.414V10a1 1 0 0 1-1 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div className="origin-top-right absolute mt-2 w-20 rounded-md shadow-lg bg-logoC" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      {options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                          className={`block w-full text-center px-4 py-2 text-sm text-black ${selectedOption === option ? 'bg-black text-logoC' : 'hover:bg-logoC text-black'}`}
                          role="menuitem"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>

        <div className='bg-white/30 background-blur-lg flex-none h-16'>
          <h1 className='w-6'></h1>
        </div>

      </div>
      <div className='pr-4 flex justify-top items-center absolute bottom-0 mb-5 right-0'>
        <h3 className='text-base mr-1 px-3 py-1 font-semibold text-logoC bg-black rounded-lg'>ENG</h3>
        <h3 className='text-base px-3 py-1 font-semibold text-logoC bg-black rounded-lg'>AMH</h3>
      </div>

    </div>


  )
}

export default Header
