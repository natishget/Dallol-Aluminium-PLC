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
    <div>
      Header Goes here
    </div>


  )
}

export default Header
