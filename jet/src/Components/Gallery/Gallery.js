import React, { useState } from 'react';
import { GalleryList } from './components/GalleryList';
import { VideoPlayer } from './components/VideoPlayer';
import './gallery.scss'

export const Gallery = () => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [state, setState] = useState(false);

  function frameClick(e) {
    setState(true);
    setActiveFrame(e.currentTarget.getAttribute('data-url'));
  }

  return (
    <section className={`section-wrapper gallery`} id='gallery'>
      {state && <VideoPlayer video={activeFrame} state={state} setState={setState}/>}
      <div className='container'>
        <div className='gallery-info'>
          <h2>ПОР<br/>ТФО<br/>ЛИО<br/></h2>
          <button type='button'>Реклама</button>
          <button type='button'>Концерты</button>
          <button type='button'>Клипы</button>
        </div>
        <div className='gallery'>
          <GalleryList frameClick={frameClick} />
        </div>
      </div>
    </section>
  )
}