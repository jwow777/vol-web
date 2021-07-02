import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Auth from '../Auth/Auth';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import '../Auth/Auth.css';

function Register() {
  const [state, setState] = useState({
    phone: '',
  });
  const [putCode, setPutCode] = useState(false);
  const handleGetCode = (e) => setPutCode(true);
  const handleSubmit = (e) => e.preventDefault();
  return (
    <Auth>
      <ul className='list auth__navigation'>
        <li>
          <NavLink to='/signin' activeClassName='auth__navigation-link_active' className='auth__navigation-link'>
            Вход
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' activeClassName='auth__navigation-link_active' className='auth__navigation-link'>
            Регистрация
          </NavLink>
        </li>
      </ul>
      <h2 className='auth__title'>Добро пожаловать в космический корпоративный мессенджер</h2>
      <p className='auth__subtitle'>Зарегистрируйтесь, чтобы продолжить</p>
      <form className='auth__form auth__form_register' onSubmit={handleSubmit}>
        <div className='auth__form-input-block'>
          <label className='auth__form-input-label'>Номер телефона</label>
          <PhoneInput
            country={'ru'}
            value={state.phone}
            onChange={phone => setState({ ...state, phone })}
            containerClass='auth__form-input-phone'
          />
          <span className='auth__form-input-error'></span>
        </div>
        <div className='auth__form-input-block'>
          <label className='auth__form-input-label'>Полное имя</label>
          <input type='text' className='auth__form-input'/>
          <span className='auth__form-input-error'></span>
        </div>
        {
          putCode
          ? (
            <>
              <div className='auth__form-input-block'>
                <label className='auth__form-input-label'>Код SMS</label>
                <input type='number' className='auth__form-input'/>
                <span className='auth__form-input-error'>Неправильный код</span>
              </div>
              <button type='submit' className='auth__form-submit'>Создать аккаунт</button>
            </>
          )
          : (
            <>
              <button type='button' className='auth__form-submit' onClick={handleGetCode}>Отправить SMS код</button>
            </>
          )
        }
      </form>
    </Auth>
  );
}

export default Register;