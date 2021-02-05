import React from 'react';
import video from '../../assests/video/jetХХ-showreel.mp4';
export function ShowReal() {
  return(
    <section className='show-real'>
      <div className='container'>
        <h2>Шоурил<br/>2020</h2>
        <video autoPlay muted src ={video}></video>
      </div>
    </section>
  )
}