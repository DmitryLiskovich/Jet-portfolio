import React, { useState } from 'react';
import { GalleryList } from './components/GalleryList';
import './gallery.scss';

export const Gallery = () => {
  const categories = [
    { type: 'Реклама' },
    { type: 'Концерты' },
    { type: 'Клипы' },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].type);

  return (
    <section className={'section-wrapper gallery'} id="gallery">
      <div className="container">
        <div className="gallery-info">
          {window.innerWidth > 991 ? <DesktopHeader /> : <MobileHeader />}

          {categories.map((item, index) => (
            <button
              className={`${selectedCategory === item.type ? 'active' : ''}`}
              onClick={() => setSelectedCategory(item.type)}
              type="button"
              key={index}
            >
              {item.type}
            </button>
          ))}
        </div>
        <div className="gallery">
          <GalleryList selected={selectedCategory} />
        </div>
      </div>
    </section>
  );
};

const DesktopHeader = () => (
  <h2>
    ПОР
    <br />
    ТФО
    <br />
    ЛИО
    <br />
  </h2>
);
const MobileHeader = () => (
  <h2>
    ПОРТ
    <br />
    ФОЛИО
  </h2>
);
