import React, { useRef, useEffect, useState } from 'react';
import homeJpgJet from '../../assests/img/home/jet-mobile.jpg';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';

export const HomeMobile = ({ active }) => {
  return (
    <section
      className={`showreal-wrapper ${active ? 'active' : ''}`}
      id="showreal"
    >
      <img src={homeJpgJet} />
      <SocialNetwork />
    </section>
  );
};
