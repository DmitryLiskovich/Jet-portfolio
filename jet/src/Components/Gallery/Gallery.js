import React, { useState, useEffect } from 'react';
import { GalleryList } from './components/GalleryList';
import { VideoPlayer } from './components/VideoPlayer';
import { Requests } from '../../Requests';
import './gallery.scss'

export const Gallery = () => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [state, setState] = useState(false);

  useEffect(() => {
    const req = new Requests();
    req.getCategories().then(data => {
      setCategories(data.data);
      setSelectedCategory(data.data[0].type);
    })
  }, [])

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
          {categories.map(item => <button className={`${selectedCategory === item.type ? 'active' : ''}`} onClick={() => setSelectedCategory(item.type)} type='button' key={item._id}>{item.type}</button>)}
        </div>
        <div className='gallery'>
          <GalleryList selected={selectedCategory} frameClick={frameClick} />
        </div>
      </div>
    </section>
  )
}