import {getRandomArbitrary} from './getRandom';

export function parallax(paralax, items) {
    const z = [];

    Array.prototype.forEach.call(items, (item)=>{
      z.push(getRandomArbitrary(-30, 0));
    })
    
    paralax.addEventListener('mousemove', (e)=> {
      const y = paralax.offsetHeight/2*0.02 - e.clientY*0.02;
      const x = paralax.offsetWidth/2*0.01 - e.clientX*0.01;
      Array.prototype.forEach.call(items, (item, index) => {
        item.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z[index]}px) rotateY(${x*0.02}deg) rotateX(${-y*0.02}deg) perspective(1000px)`;
      })
    });
}