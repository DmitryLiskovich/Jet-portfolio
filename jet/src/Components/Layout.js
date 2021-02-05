import React, { useEffect, useRef } from 'react';
import { Home } from './Home/Home';
import { Gallery } from './Gallery/Gallery';
import { Contacts } from './Contacts/Contacts';
import { About } from './About/About';
import { EasterEgg } from './EasterEgg/EasterEgg';
import { HomeMobile } from './HomeMobile/HomeMobile';
import { ShowReal } from './ShowReal/ShowReal';
import './layout.scss';

export const Layout = () => {
  const wrapper = useRef();
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    window.addEventListener('wheel', (e) => {
      requestAnimationFrame(scroll(e.deltaY));
      showOnScroll(sections);
    })
    showOnScroll(sections);
  }, [])

  function scroll(deltaY, count = 0) {
    return function () {
      window.scrollBy({
        left: deltaY/10,
      })
      if(count < 10) {
        requestAnimationFrame(scroll(deltaY, count+1))
      }
    }
  }
  
  function showOnScroll(sections) {
    Array.prototype.forEach.call(sections, (item) => {
      const calc = item.getBoundingClientRect();
      if(calc.left < window.innerWidth*3/4 && -calc.left < window.innerWidth*3/4) {
        item.classList.add('active');
      }
    })
  }

  return (
    <div ref={wrapper} className="root-wrapper">
      {window.innerWidth > 991 ? <Home /> : <HomeMobile />}
      {window.innerWidth < 991 && <ShowReal/>}
      <Gallery />
      <About />
      <Contacts />
      <EasterEgg />
    </div>
  );
};
