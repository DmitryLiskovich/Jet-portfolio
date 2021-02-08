import React, { useEffect, useRef } from 'react';
import { Home } from './Home/Home';
import { Gallery } from './Gallery/Gallery';
import { Contacts } from './Contacts/Contacts';
import { About } from './About/About';
import { EasterEgg } from './EasterEgg/EasterEgg';
import { HomeMobile } from './HomeMobile/HomeMobile';
import { ShowReal } from './ShowReal/ShowReal';
import './layout.scss';

function scroll(deltaY, count = 0) {
  return function () {
    window.scrollBy({
      left: deltaY/10,
    })
    if(count < 9) {
      requestAnimationFrame(scroll(deltaY, count+1))
    }
  }
}

export const Layout = () => {
  const wrapper = useRef();

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

  function showOnScroll(sections, path) {
    const ofset = path === 'left' ? window.innerWidth*3/4 : window.innerHeight*0.8;
    Array.prototype.forEach.call(sections, (item) => {
      const calc = item.getBoundingClientRect();
      if(calc[path] < ofset*3/4 && -calc[path] < ofset*3/4) {
        item.classList.add('active');
      }
    })
  }

  return (
    <div ref={wrapper} className="root-wrapper">
      {window.innerWidth > 991 ? <Home /> : <HomeMobile />}
      {window.innerWidth <= 991 && <ShowReal/>}
      <Gallery />
      <About />
      <Contacts />
      <EasterEgg />
    </div>
  );
};
