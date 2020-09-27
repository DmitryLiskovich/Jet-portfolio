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
  const front2 = useRef(null);
  const screen = useRef(null);
  const fullScreenRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const y = screen.current?.offsetHeight/2*0.02 - e.clientY*0.02;
      const x = screen.current?.offsetWidth/2*0.01 - e.clientX*0.01;
      back.current.style.transform = `translateX(${-x*1.4}px) translateY(${-y*1.4}px)`;
      back2.current.style.transform = `translateX(${-x/1.2}px) translateY(${-y/1.2}px)`;
      back4.current.style.transform = `translateX(${-x/2}px) translateY(${-y/2}px)`;
      back3.current.style.transform = `translateX(${-x/4}px) translateY(${-y/4}px)`;
      front.current.style.transform = `translateX(${x/5}px) translateY(${y/5}px)`;
    }, true)
    let timer;
    const open = fullScreenRef.current;
    const video = open.querySelector('video');

    front.current.querySelector('img').addEventListener('load', e => {
      resetSize(open, video);
    })
    window.addEventListener('resize', () => {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        resetSize(open, video);
      }, 200)
    })
  }, [])

  useEffect(() => {
    const open = fullScreenRef.current;
    const video = open.querySelector('video');
    if(fullScreen) {
      setSize(open, video);
    } else {
      resetSize(open, video);
    }
  }, [fullScreen])

  function setSize(open, video) {
    open.style.transform = `translateY(0px)`
    open.style.height = '100%';
    open.style.width = '100%';
    open.style.opacity = 1;
    open.style.zIndex = 10;
    open.style.padding = '5%';
    video.style.objectFit = 'auto';
    video.currentTime = front2.current.currentTime;
    video.play();
  }

  function resetSize(open, video) {
    open.style.transform = `translateY(${front.current.getClientRects()[0].top}px)`
    open.style.height = front.current.clientHeight+'px';
    open.style.opacity = 0;
    open.style.zIndex = -1;
    open.style.width = getComputedStyle(front.current.querySelector('.jet-effect')).width;
    video.style.objectFit = 'cover';
    open.style.padding = 0;
    video.pause();
  }
  

  function openVideo(e) {
    if(e.target.tagName.toLowerCase() !== 'video') {
      setFullScreen(state => !state);
    }
  }

  return(
    <section ref={screen} className={`showreal-wrapper ${active ? 'active' : ''}`} id='showreal'>
      <div onClick={openVideo} ref={fullScreenRef} className='full-screen'>
        <video  controls src={video}></video>
      </div>
      <Navbar/>
      <div ref={back} className='home_back'></div>
      <div ref={back2} className='home_back_2'></div>
      <div ref={back4} className='home_back_4'></div>
      <div ref={back3} className='home_back_3'></div>
      <div ref={front} className='content container'>
        <div onClick={openVideo} className='jet-effect'>
          <img alt="Фильммейкер | Видеомейкер из Беларуси" className='text' src={text}/>
          <video ref={front2} className='text' src={video} autoPlay muted loop/>
        </div>
      </div>
      <div className='home_front'></div>
    </section>
  )
}