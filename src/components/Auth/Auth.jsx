import React from 'react';
import './Auth.css';

import bg from '../../images/Auth/bg.jpg';
import logo from '../../images/Auth/logo.svg';

function Auth({ children }) {
  return (
    <main className='auth'>
      <div className='auth__container'>
        <div className='auth__block auth__block_left'>
          {children}
        </div>
        <div className='auth__block auth__block_right'>
          <img src={bg} alt='' className='auth__bg'/>
          <div className='auth__logo-block'>
            <img src={logo} alt='' className='auth__logo-image'/>
            <h1 className='auth__logo-title'>VOL</h1>
          </div>
          <p className='auth__logo-subtitle'>Corporate messenger</p>
        </div>
      </div>
    </main>
  );
}

export default Auth;
