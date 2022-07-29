import React from 'react';
import logo from '../../logo.jpeg';

const Header = () => {
  return (
    <div className='text-white bg-gradient-to-br from-purple-600 to-blue-500 dark:focus:ring-blue-800 font-medium text-md text-center p-3'>
      Encuesta Pilares Institucionales

      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
