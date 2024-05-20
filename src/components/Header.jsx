import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ENG'); // Set the default selected option here

  const options = ['ENG', 'AMH'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='text-gray-800 w-screen font-sans fixed'>

      <div className='w-screen bg-white/30 background-blur-lg'>
        <div className='bg-white/30 background-blur-lg flex-1 flex justify-between pt-4 pb-4'>

          <div className='flex justify-center pl-6'>
            <img src={logo} alt="" className='w-12 h-12' />
            <h3 className='pl-1 flex items-center text-lg font-semibold'>Dallol Aluminium</h3>
          </div>

          <div className='flex pt-2 font-semibold text-lg pr-6 items-center'>
            <Link to="" className='pr-3'> Home </Link>
            <Link to="about" className='pr-3'> About Us</Link>
            <Link to="service" className='pr-3'> Services </Link>
            <Link to="contact" className='pr-3'> Contact Us</Link>

            <div className="w-20">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-lg border border-white/40 bg-primary px-4 py-2 text-sm font-semibold text-gray-800 focus:outline-none"
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
                <div className="origin-top-right absolute mt-2 w-20 rounded-md shadow-lg bg-primary" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className={`block w-full text-center px-4 py-2 text-sm text-black ${selectedOption === option ? 'bg-black text-primary' : 'hover:bg-primary text-gray-800'}`}
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

    </div>


  )
}

export default Header
