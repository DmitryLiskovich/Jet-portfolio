import React from 'react';
import { Footer } from '../Footer/Footer';
import { ContactsDesktop } from './components/ContactsDesktop';
import { ContactsMobile } from './components/ContactsMobile';
import './contacts.scss';

export const Contacts = ({ active }) => {
  return (
    <section
      className={`section-wrapper section white ${active ? 'active' : ''}`}
      id="conacts"
    >
      <div className="container">
        <div className="section-logo">
          {window.innerWidth <= 991 ? <ContactsMobile /> : <ContactsDesktop />}
        </div>
        <div className="connection">
          <h2>Связь</h2>
          <button type="text">Почта</button>
          <button type="text">Телеграм</button>
        </div>
      </div>
      <Footer />
    </section>
  );
};
