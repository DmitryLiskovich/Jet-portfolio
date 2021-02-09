import React from 'react';
import { logos } from '../helpers/logos';

export const ContactsMobile = () => {
  return (
    <>
      <h2>
        C кем
        <br /> работал
      </h2>
      <div className="logos">
        {logos.map((item, ind) => (
          <div className="img-wrapper" key={ind}>
            <a href={item.link ? item.link : 'javascript:void(0)'}>
              <img alt={`Логотип партнера ${ind}`} src={item.src} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
