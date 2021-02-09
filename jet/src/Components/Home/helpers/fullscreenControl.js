export const setSize = (open, video, time) => {
  open.style.transform = `translateY(0px)`
  open.style.height = '100%';
  open.style.width = '100%';
  open.style.opacity = 1;
  open.style.zIndex = 10;
  video.style.objectFit = 'auto';
  video.currentTime = time;
  video.play();
}

export const resetSize = (open, video, front) => {
  open.style.transform = `translateY(${front.getClientRects()[0].top}px)`
  open.style.height = front.clientHeight+'px';
  open.style.opacity = 0;
  open.style.zIndex = -1;
  open.style.width = getComputedStyle(front.querySelector('.jet-effect')).width;
  video.style.objectFit = 'cover';
  video.pause();
}