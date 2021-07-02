import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

import qex from '../../images/Navbar/qex.jpg';
import dialogs from '../../images/Navbar/dialogs.svg';
import groupChats from '../../images/Navbar/group-chats.svg';
import contacts from '../../images/Navbar/contacts.svg';
import bot from '../../images/Navbar/bot.svg';

function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='list navbar__list navbar__list_top'>
        <li className='navbar__list-item'>
          <NavLink exact to='/' activeClassName='navbar__list-link_active' className='navbar__list-link'>
            <img src={qex} alt='QEX' className='navbar__list-item-image navbar__list-item-image_workspace'/>
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/dialog' activeClassName='navbar__list-link_active' className='navbar__list-link'>
            <img src={dialogs} alt='Диалоги' className='navbar__list-item-image'/>
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/group-chat' activeClassName='navbar__list-link_active' className='navbar__list-link'>
            <img src={groupChats} alt='Групповые чаты' className='navbar__list-item-image'/>
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/contacts' activeClassName='navbar__list-link_active' className='navbar__list-link'>
            <img src={contacts} alt='Контакты' className='navbar__list-item-image'/>
          </NavLink>
        </li>
        {/* <li className='navbar__list-item'>
          <NavLink to='/signup' activeClassName='auth__navigation-link_active' className='auth__navigation-link'>
            <img src='' alt='' className=''/>
          </NavLink>
        </li> */}
      </ul>
      <ul className='list navbar__list navbar__list_bottom'>
        <li className='navbar__list-item'>
          <button className='navbar__list-button'>
            <img src={bot} alt='QEX' className='navbar__list-item-image'/>
          </button>
        </li>
        <li className='navbar__list-item'>
          <button className='navbar__list-button navbar__list-button_round'>?</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
