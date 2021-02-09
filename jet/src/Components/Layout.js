import React, { useEffect } from 'react';
import { Home } from './Home/Home';
import { Gallery } from './Gallery/Gallery';
import { Contacts } from './Contacts/Contacts';
import { About } from './About/About';
import { HomeMobile } from './HomeMobile/HomeMobile';
import { ShowReal } from './ShowReal/ShowReal';
import { scroll } from './helpers/scroll';
import { showOnScroll } from './helpers/showOnScroll';
import './layout.scss';

export const Layout = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const path = window.innerWidth <= 991 ? 'top' : 'left';
  
    window.addEventListener('wheel', (e) => {
      requestAnimationFrame(scroll(e.deltaY));
    })
    
    window.addEventListener('scroll', () => {
      showOnScroll(sections, path);
    })

    showOnScroll(sections, path);
  }, [])

  return (
    <div className="root-wrapper">
      {window.innerWidth > 991 ? <Home /> : <HomeMobile />}
      {window.innerWidth <= 991 && <ShowReal/>}
      <Gallery />
      <About />
      <Contacts />
    </div>
  );
};
