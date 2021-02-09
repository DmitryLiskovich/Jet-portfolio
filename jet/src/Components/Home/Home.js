import React, { useRef, useEffect, useState } from 'react';
import video from '../../assests/video/jetХХ-showreel.mp4';
import text from '../../assests/img/text/text.png';
import { Navbar } from '../Navbar/Navbar';
import { setSize, resetSize } from './helpers/fullscreenControl';
import { parallax } from './helpers/parallax';
import './home.scss';

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
    document.addEventListener(
      'mousemove',
      (e) => {
        requestAnimationFrame(() => {
          parallax({
            back: back.current,
            back2: back2.current,
            back3: back3.current,
            back4: back4.current,
            front: front.current,
            screen: screen.current,
            event: e,
          });
        });
      },
      true,
    );

    const open = fullScreenRef.current;
    const video = open.querySelector('video');

    front.current.querySelector('img').addEventListener('load', () => {
      resetSize(open, video, front.current);
    });

    let timer;
    window.addEventListener('resize', () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        resetSize(open, video, front.current);
      }, 200);
    });
  }, []);

  useEffect(() => {
    const open = fullScreenRef.current;
    const video = open.querySelector('video');

    if (fullScreen) {
      setSize(open, video, front2.current.currentTime);
    } else {
      resetSize(open, video, front.current);
    }
  }, [fullScreen]);

  function openVideo() {
    setFullScreen((state) => !state);
  }

  return (
    <section
      ref={screen}
      className={`showreal-wrapper ${active ? 'active' : ''}`}
      id="showreal"
    >
      <h1 className="hidden-for-seo">Фильммейкер из Беларуси</h1>
      <div onClick={openVideo} ref={fullScreenRef} className="full-screen">
        <video src={video}></video>
      </div>
      <Navbar />
      <div ref={back} className="home_back"></div>
      <div ref={back2} className="home_back_2"></div>
      <div ref={back4} className="home_back_4"></div>
      <div ref={back3} className="home_back_3"></div>
      <div ref={front} className="content container">
        <div onClick={openVideo} className="jet-effect">
          <img
            alt="Фильммейкер | Видеомейкер из Беларуси"
            className="text"
            src={text}
          />
          <video
            ref={front2}
            className="text"
            src={video}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className="home_front"></div>
    </section>
  );
};
