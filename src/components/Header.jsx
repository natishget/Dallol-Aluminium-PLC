import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ENG');

  const options = ['ENG', 'AMH'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-gray-800 w-full font-sans fixed z-50">
      <div className="md:w-[90%] w-full mx-auto rounded-md shadow-slate-300 shadow-xl bg-white/30 background-blur-lg">
        <div className="bg-white/50 background-blur-lg flex justify-between pt-4 pb-4">
          <div className="flex justify-center pl-6">
            <img src={logo} alt="" className="md:w-12 md:h-12 w-11 h-11 my-auto" />
            <h3 className="pl-1 flex items-center md:text-lg text-base font-semibold">Dallol Aluminum</h3>
          </div>

          <nav className="hidden md:flex pt-2 font-semibold text-lg pr-6 items-center">
            <Link to="" className="pr-3"> Home </Link>
            <Link to="about" className="pr-3"> About Us</Link>
            <Link to="service" className="pr-3"> Services </Link>
            <Link to="contact" className="pr-3"> Contact Us</Link>

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
          </nav>

          <div className="flex md:hidden items-center pr-6 justify-end">
          <div className="w-16 mr-2">
            {/* AMH and ENG */}
              <div className=''>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-lg border border-white/40 bg-primary px-2 py-1 text-sm font-semibold text-gray-800 focus:outline-none"
                  id="options-menu"
                  aria-expanded="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedOption}
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 transform rotate-180 -mt-1"
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
                <div className="origin-top-right absolute mt-2 w-16 rounded-md shadow-lg bg-primary" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className={`block w-full text-center px-4 py-1 text-xs text-gray-800 ${selectedOption === option ? 'bg-black text-primary' : 'hover:bg-primary text-gray-800'}`}
                        role="menuitem"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* burger and close */}
            <button
              className="rounded-lg p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="bg-white/50 background-blur-2xl px-6 py-4 md:hidden text-gray-700">
            <Link to="" className="block py-2 font-semibold text-lg"> Home </Link>
            <Link to="about" className="block py-2 font-semibold text-lg"> About Us</Link>
            <Link to="service" className="block py-2 font-semibold text-lg"> Services </Link>
            <Link to="contact" className="block py-2 font-semibold text-lg"> Contact Us</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;