import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

      <a to="/"> Home </a>
      <a to="/about"> About </a>
      <a to="/service"> Service </a>
      <a to="/contact"> Contact </a>
    </div>
  )
}

export default Header
