import React from 'react';
import { Footer } from '../Footer/Footer';
import './contacts.scss';
import { logos1, logos2, logos3, logos } from './helpers/logos';

export const Contacts = ({ active }) => {
  return (
    <section
      className={`section-wrapper section white ${active ? 'active' : ''}`}
      id="conacts"
    >
      <div className="container">
        <div className="section-logo">
          {window.innerWidth > 991 && (
            <h2>
              C кем
              <br /> рабо
              <br /> тал
            </h2>
          )}
          {window.innerWidth <= 991 && (
            <h2>
              C кем
              <br /> работал
            </h2>
          )}
          <div className="logos">
            {window.innerWidth > 991 && (
              <>
                <div className="logos-row">
                  {logos1.map((item, ind) => (
                    <div className="img-wrapper" key={ind}>
                      <a
                        rel="noreferrer nofollow"
                        target="_blank"
                        href={item.link ? item.link : 'javascript:void(0)'}
                      >
                        <img alt={`Логотип партнера ${ind}`} src={item.src} />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="logos-row">
                  {logos2.map((item, ind) => (
                    <div className="img-wrapper" key={ind}>
                      <a
                        rel="noreferrer nofollow"
                        target="_blank"
                        href={item.link ? item.link : 'javascript:void(0)'}
                      >
                        <img alt={`Логотип партнера ${ind}`} src={item.src} />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="logos-row">
                  {logos3.map((item, ind) => (
                    <div className="img-wrapper" key={ind}>
                      <a
                        rel="noreferrer nofollow"
                        target="_blank"
                        href={item.link ? item.link : 'javascript:void(0)'}
                      >
                        <img alt={`Логотип партнера ${ind}`} src={item.src} />
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
            {window.innerWidth <= 991 &&
              logos.map((item, ind) => (
                <div className="img-wrapper" key={ind}>
                  <a href={item.link ? item.link : 'javascript:void(0)'}>
                    <img alt={`Логотип партнера ${ind}`} src={item.src} />
                  </a>
                </div>
              ))}
          </div>
        </div>
        <div className="connection">
          <h2>Связь</h2>
          <button type="test">Почта</button>
          <button type="test">Телеграм</button>
        </div>
      </div>
      <Footer />
    </section>
  );
};
