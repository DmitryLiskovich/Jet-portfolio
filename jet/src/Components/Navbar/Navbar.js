import React from 'react';
import axios from 'axios';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import logo from '../../assests/img/svg/logo.svg'
import './navbar.scss';

window.addEventListener('load', () => {
  axios.get('http://localhost:3000/api/analytics');
})

export const Navbar = () => {
  return (
    <header className='container'>
      <img className='logo' alt='logo' src={logo}></img>
      <SocialNetwork/>
    </header>
  )
}