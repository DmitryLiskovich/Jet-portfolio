import React from 'react';
import homeJpgJet from '../../assests/img/home/jet-mobile.jpg';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import logo from '../../assests/img/svg/logo.svg';

export const HomeMobile = ({ active }) => {
  return (
    <section
      className={`showreal-wrapper ${active ? 'active' : ''}`}
      id="showreal"
    >
      <nav className="header-mobile">
        <img className="logo-mobile" alt="logo" src={logo}></img>
      </nav>
      <img alt="Home background mobile" src={homeJpgJet} />
      <SocialNetwork />
    </section>
  );
};
