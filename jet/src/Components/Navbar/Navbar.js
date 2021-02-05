import React from 'react';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import logo from '../../assests/img/svg/logo.svg';
import './navbar.scss';

export const Navbar = () => {
  return (
    <header className="container">
      <img className="logo" alt="logo" src={logo}></img>
      <SocialNetwork />
    </header>
  );
};
