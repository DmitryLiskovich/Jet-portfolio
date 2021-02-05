import React, { useState, useEffect } from 'react';
import { GalleryList } from './components/GalleryList';
import { VideoPlayer } from './components/VideoPlayer';
import { Requests } from '../../Requests';
import './gallery.scss';

export const Gallery = () => {
  const [activeFrame, setActiveFrame] = useState(0);
  const categories = [
    {type: "Реклама"},
    {type: "Концерты"},
    {type: "Клипы"},
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].type);
  const [state, setState] = useState(false);

  function frameClick(e) {
    setState(true);
    setActiveFrame(e.currentTarget.getAttribute('data-url'));
  }

  return (
    <section className={`section-wrapper gallery`} id="gallery">
      {state && (
        <VideoPlayer video={activeFrame} state={state} setState={setState} />
      )}
      <div className="container">
        <div className="gallery-info">
          {window.innerWidth > 991 && (
            <h2>
              ПОР
              <br />
              ТФО
              <br />
              ЛИО
              <br />
            </h2>
          )}
          {window.innerWidth < 991 && (
            <h2>
              ПОРТ
              <br />
              ФОЛИО
            </h2>
          )}
          {categories.map((item) => (
            <button
              className={`${selectedCategory === item.type ? 'active' : ''}`}
              onClick={() => setSelectedCategory(item.type)}
              type="button"
              key={item._id}
            >
              {item.type}
            </button>
          ))}
        </div>
        <div className="gallery">
          <GalleryList selected={selectedCategory} frameClick={frameClick} />
        </div>
      </div>
    </section>
  );
};
