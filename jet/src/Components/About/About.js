import React from 'react';
import './about.scss';
import aboutimg1 from '../../assests/img/about/about-1.jpg';
import aboutimg2 from '../../assests/img/about/about-2.jpg';
import aboutimg3 from '../../assests/img/about/about-3.jpg';

export const About = () => {
  return(
    <section className='about-section'>
      <div className='container'>
        <div className='about-section_images'>
          <img alt='Женя Соломонов со штативом' src={aboutimg1}/>
          <img alt='Женя Соломонов снимает на сцене' src={aboutimg2}/>
          <img alt='Женя Соломонов на сцене' src={aboutimg3}/>
        </div>
        <div className='about-section_text'>
          <h2>ОБО<br/>МНЕ</h2>
          <p>
            В 2008 я впервые взял в руки камеру, нажал красную кнопку — и сразу же влюбился.
            В течение следующих 12 лет я с головой погрузился в съемку и монтаж видео.
          </p>
          <p>
            За это время мне удалось взаимодействовать со многими прекрасными людьми и компаниями, 
            снимать несколько ночей подряд, в 30-ти градусный мороз и в тесных жарких клубах.
          </p>
          <p>
            В 2008 у меня был слабый ноутбук и уйма энтузиазма. Время изменилось, 
            как и техника, но энтузиазма сейчас ни чуть не меньше.
          </p>
        </div>
      </div>
    </section>
  )
}