import React, {useEffect, useState} from 'react' 
import { Requests } from '../../../Requests';
import { imgScale } from './helpers/imgScale';
import videos from './helpers/videos';

const req = new Requests();
export function GalleryList({frameClick, selected}) {

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      const articles = document.querySelectorAll('.video-article');
      
      Array.prototype.forEach.call(articles, item => {
        stopOnOut({currentTarget: item}, true);
        const itemHeight = item.getBoundingClientRect().height;
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < window.innerWidth/2 && (itemTop + itemHeight) > window.innerWidth/2) {
          playOnHover({currentTarget: item});
        }
      })
    })

  }, []);

  function playOnHover(e, check) {
    if(e.persist) {
      e.persist()
    }
    const video = e.currentTarget.querySelector('video');
    const poster = e.currentTarget.querySelector('.poster');
    if(!check) {
      imgScale(e.currentTarget, e.currentTarget.parentElement.parentElement.querySelectorAll('article'))
    }
    video.play();
    poster.classList.add('hide');
  }
  
  function stopOnOut(e) {
    if(e.persist) {
      e.persist()
    }
    e.currentTarget.parentElement.parentElement.classList.remove('hoverable')
    const video = e.currentTarget.querySelector('video');
    const poster = e.currentTarget.querySelector('.poster');
    video.pause();
    poster.classList.remove('hide');
  }

  return (
    <>
      <div className='first' style={{flexShrink: '0.95'}}>
        {videos.length && videos.filter(item => item.types.some(val => val.type === selected)).map((item, index) => index < 2 ? (
          <article className='video-article' onMouseLeave={stopOnOut} onMouseOver={playOnHover} onClick={frameClick} data-url={item.google_link_video} key={index}>
            <div className='video-container'>
              <div className='poster' style={{backgroundImage: `url(${item.google_link_img})`}}></div>
              <div className='filter'></div>
              <video muted src={item.google_link_video}/>
              <div className='text'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        ) : '')}
      </div>
      <div className='second'>
        {videos.length && videos.filter(item => item.types.some(val => val.type === selected)).map((item, index) => index > 1 ? (
          <article className='video-article' onMouseLeave={stopOnOut} onMouseOver={playOnHover} onClick={frameClick} data-url={item.google_link_video} key={index}>
            <div className='video-container'>
              <div className='poster' style={{backgroundImage: `url(${item.google_link_img})`}}></div>
              <div className='filter'></div>
              <video muted src={item.google_link_video}/>
              <div className='text'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        ) : '')}
      </div>
    </>
  );
}
