import React, { useEffect } from 'react';
import { Home } from './Home/Home';
import { Gallery } from './Gallery/Gallery';
import { Contacts } from './Contacts/Contacts';
import { About } from './About/About';
import { EasterEgg } from './EasterEgg/EasterEgg';
import './layout.scss';

let activeGlobal;

export const Layout = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
    const section = document.querySelectorAll('section');
    let maxXoffset = (section.length-1)*window.innerWidth;
    let transform = +getComputedStyle(section[0]).transform.split(', ')[5];
    let xOffset = transform ? transform : 0;

    window.addEventListener('resize', () => {
      maxXoffset = (section.length-1)*window.innerWidth;
      transform = +getComputedStyle(section[0]).transform.split(', ')[5];
    })

    window.addEventListener('wheel', (e)=>{
      const offset = e.deltaY > 0 ? window.innerWidth/16 : -window.innerWidth/16;
      const nextOffset = xOffset + offset;
      if(nextOffset <= maxXoffset && nextOffset >= 0) {
        xOffset += offset;
        Array.prototype.forEach.call(section, (item) => {
          item.style.transform = `translateX(-${xOffset}px)`;
        })
      }
    });

    ['wheel', 'scroll'].forEach((item)=> {
      window.addEventListener(item, ()=> {
        const newActive = Math.round((xOffset/window.innerWidth)-0.2)+1;
        if(newActive !== activeGlobal) {
          activeGlobal = newActive;
          section[newActive-1].classList.add('active');
        }
      })
    })
  }, [])

  return (
    <>
      <Home/>
      <Gallery/>
      <About/>
      <Contacts/>
      <EasterEgg/>
    </>
  )
}