export const parallax = (elements) => {
  const {back, back2, back3, back4, front, screen, event} = elements;
  if(back && back2 && back4 && back3 && front) {
    const y = screen?.offsetHeight/2*0.02 - event.clientY*0.02;
    const x = screen?.offsetWidth/2*0.01 - event.clientX*0.01;
    back.style.transform = `translateX(${-x*1.4}px) translateY(${-y*1.4}px)`;
    back2.style.transform = `translateX(${-x/1.2}px) translateY(${-y/1.2}px)`;
    back4.style.transform = `translateX(${-x/2}px) translateY(${-y/2}px)`;
    back3.style.transform = `translateX(${-x/4}px) translateY(${-y/4}px)`;
    front.style.transform = `translateX(${x/5}px) translateY(${y/5}px)`;
  }
}