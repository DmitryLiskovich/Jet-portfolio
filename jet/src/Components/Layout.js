import React, { useEffect, useRef } from 'react';
import { Home } from './Home/Home';
import { Gallery } from './Gallery/Gallery';
import { Contacts } from './Contacts/Contacts';
import { About } from './About/About';
import { EasterEgg } from './EasterEgg/EasterEgg';
import './layout.scss';

let activeGlobal;

export const Layout = () => {

  const wrapper = useRef();

  useEffect(()=>{

    window.addEventListener('wheel', ()=> {
      document.dispatchEvent(new KeyboardEvent('keypress', {key: 'Shift'}))
    })

    // window.addEventListener('keydown', (e) => console.log(e))

    window.scrollTo(0, 0)
    const section = document.querySelectorAll('section');
    let maxXoffset = (section.length-1)*window.innerWidth;
    let transform = +getComputedStyle(wrapper.current).transform.match(/-?\d+\.?\d+/g);
    let xOffset = transform ? transform : 0;
    let lastProcess = xOffset / maxXoffset;

    window.addEventListener('resize', () => {
      maxXoffset = (section.length-1)*window.innerWidth;
      transform = +getComputedStyle(wrapper.current).transform.match(/-?\d+\.?\d+/g);
      wrapper.current.style.transform = `translateX(-${maxXoffset*lastProcess-1}px)`
    })

    window.addEventListener('wheel', (e)=>{
      const offset = e.deltaY > 0 ? window.innerWidth/16 : -window.innerWidth/16;
      const nextOffset = xOffset + offset;
      if(nextOffset <= maxXoffset && nextOffset >= 0) {
        xOffset += offset;
        wrapper.current.style.transform = `translateX(-${xOffset}px)`;
      }
      if (nextOffset > maxXoffset) {
        wrapper.current.style.transform = `translateX(-${maxXoffset}px)`;
        xOffset = maxXoffset;
      }
      lastProcess = xOffset / maxXoffset;
    });

    ['wheel', 'scroll'].forEach((item)=> {
      window.addEventListener(item, ()=> {
        const newActive = Math.round((xOffset/window.innerWidth)-0.05)+1;
        if(newActive !== activeGlobal) {
          activeGlobal = newActive;
          section[newActive-1]?.classList.add('active');
        }
      })
    })
  }, [])

  return (
    <div ref={wrapper} className='root-wrapper'>
      <Home/>
      <Gallery/>
      <About/>
      <Contacts/>
      <EasterEgg/>
    </div>
  )
}