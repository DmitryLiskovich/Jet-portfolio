import React, { useRef, useEffect, useState } from 'react';
import video from '../../assests/video/jetХХ-showreel.mp4';
import text from '../../assests/img/text/text.png'
import { Navbar } from '../Navbar/Navbar';
import './home.scss';
// import { scrollAnimation } from '../../helpers/scrollAnimation';

export const Home = ({ active }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const back = useRef(null);
  const back2 = useRef(null);
  const back3 = useRef(null);
  const back4 = useRef(null);
  const front = useRef(null);
  const screen = useRef(null);


  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const y = screen.current.offsetHeight/2*0.02 - e.clientY*0.02;
      const x = screen.current.offsetWidth/2*0.01 - e.clientX*0.01;
      back.current.style.transform = `translateX(${-x*1.4}px) translateY(${-y*1.4}px)`;
      back2.current.style.transform = `translateX(${-x/1.2}px) translateY(${-y/1.2}px)`;
      back4.current.style.transform = `translateX(${-x/2}px) translateY(${-y/2}px)`;
      back3.current.style.transform = `translateX(${-x/4}px) translateY(${-y/4}px)`;
      front.current.style.transform = `translateX(${x/5}px) translateY(${y/5}px)`;
    }, true)
  }, [])

  return(
    <section ref={screen} className={`showreal-wrapper ${active ? 'active' : ''}`} id='showreal'>
      <Navbar/>
      <div ref={back} className='home_back'></div>
      <div ref={back2} className='home_back_2'></div>
      <div ref={back4} className='home_back_4'></div>
      <div ref={back3} className='home_back_3'></div>
      <div ref={front} className='content container'>
        <div onClick={() => setFullScreen(state => !state)} className={`jet-effect ${fullScreen ? 'full-screen' : ''}`}>
          <img alt="Фильммейкер | Видеомейкер из Беларуси" className='text' src={text}/>
          <video className='text' src={video} autoPlay muted loop/>
        </div>
      </div>
      <div className='home_front'></div>
      {fullScreen &&
        <div onClick={() => setFullScreen(false)} className='video-full-screen_wrapper'>
          <video className='video-full-screen' controls src={video} autoPlay muted loop/>
        </div>
      }
    </section>
  )
}