import React from 'react';
import { logosFirstRow, logosSecondRow, logosThirdRow } from '../helpers/logos';

export const ContactsDesktop = () => {
  return (
    <>
      <h2>
        C кем
        <br /> рабо
        <br /> тал
      </h2>
      <div className="logos">
        {window.innerWidth > 991 && (
          <>
            <div className="logos-row">
              {logosFirstRow.map((item, ind) => (
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
              {logosSecondRow.map((item, ind) => (
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
              {logosThirdRow.map((item, ind) => (
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
      </div>
    </>
  );
};
