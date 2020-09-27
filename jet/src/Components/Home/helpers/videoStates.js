export const reset = (el, front) => {
  el.style.transform = `translateY(${front?.getClientRects()[0].top}px)`
  el.style.height = front?.clientHeight+'px';
  el.style.opacity = 0;
  el.style.zIndex = -1;
  el.style.width = front && getComputedStyle(front.querySelector('.jet-effect')).width;
  el.querySelector('video').style.objectFit = 'cover';
}

export const setSize = (el) => {
  el.style.transform = `translateY(0px)`
  el.style.height = '100%';
  el.style.width = '100%';
  el.style.opacity = 1;
  el.style.zIndex = 10;
  el.querySelector('video').style.objectFit = 'auto';
}