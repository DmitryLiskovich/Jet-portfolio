import React, {useEffect, useState} from 'react' 
import { parallax } from '../../../helpers/parallax';
import axios from 'axios';

export function GalleryList({frameClick}) {

  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    ( async () => {
      const videos = await axios.get('http://localhost:3000/api/videos');
      console.log(videos);
      setVideos(() => videos.data.data);
    })();
  }, [])

  useEffect(() => {
    const paralax = document.querySelector('.section-wrapper.gallery')
    const imgall = document.querySelectorAll('article');
    const iframe = document.querySelectorAll('iframe');
    parallax(paralax, iframe);
    parallax(paralax, imgall);
  }, [videos])

  return videos.map((link, index) => (
    <article onClick={frameClick} data-url={link.video} key={index}>
      <div style={{backgroundImage: `url(${link.img})`}} />
    </article>
  ))
}
