import React, {useEffect, useState} from 'react' 
import { Requests } from '../../../Requests';
import { imgScale } from './helpers/imgScale';

const req = new Requests();
export function GalleryList({frameClick, selected}) {
  
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    req.getVideos().then(data => {
      setVideos(data.data);
    })


  }, []);

  function playOnHover(e) {
    e.persist();
    const video = e.currentTarget.querySelector('video');
    const poster = e.currentTarget.querySelector('.poster');
    imgScale(e.currentTarget, e.currentTarget.parentElement.parentElement.querySelectorAll('article'))
    video.play();
    poster.classList.add('hide');
  }
  
  function stopOnOut(e) {
    e.persist();
    e.currentTarget.parentElement.parentElement.classList.remove('hoverable')
    const video = e.currentTarget.querySelector('video');
    const poster = e.currentTarget.querySelector('.poster');
    video.pause();
    poster.classList.remove('hide');
  }

  return (
    <>
      <div className='first'>
        {videos.filter(item => item.types.some(val => val.type === selected)).map((item, index) => index < 2 ? (
          <article onMouseLeave={stopOnOut} onMouseOver={playOnHover} onClick={frameClick} data-url={req.getUrl(item.video[0].url)} key={index}>
            <div className='video-container'>
              <div className='poster' style={{backgroundImage: `url(${req.getUrl(item.placeholder[0].url)})`}}></div>
              <div className='filter'></div>
              <video muted src={req.getUrl(item.video[0].url)}/>
              <div className='text'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        ) : '')}
      </div>
      <div className='second'>
        {videos.filter(item => item.types.some(val => val.type === selected)).map((item, index) => index > 1 ? (
          <article onMouseLeave={stopOnOut} onMouseOver={playOnHover} onClick={frameClick} data-url={req.getUrl(item.video[0].url)} key={index}>
            <div className='video-container'>
              <div className='poster' style={{backgroundImage: `url(${req.getUrl(item.placeholder[0].url)})`}}></div>
              <div className='filter'></div>
              <video muted src={req.getUrl(item.video[0].url)}/>
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
