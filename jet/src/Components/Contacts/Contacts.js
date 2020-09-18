import React from 'react';
import { Footer } from '../Footer/Footer';
import './Contacts.scss'
import logos from './helpers/logos';

export const Contacts = ({active}) => {
  return(
    <section className={`section-wrapper section white ${active ? 'active' : ''}`} id='conacts'>
      <div className='container'>
        <div className='section-logo'>
          <h2>C кем<br/> рабо<br/> тал</h2>
          <div className='logos'>
            {logos.map((item, ind) => <div className='img-wrapper' key={ind}><img alt={`Логотип партнера ${ind}`} src={item}/></div>)}
          </div>
        </div>
        <div className='connection'>
          <h2>Связь</h2>
          <button type='test'>Почта</button>
          <button type='test'>Телеграм</button>
        </div>
      </div>
      <Footer/>
    </section>
  )
}