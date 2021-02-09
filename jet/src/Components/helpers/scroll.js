export const scroll = (deltaY, count = 0) => {
  return function() {
    window.scrollBy({
      left: deltaY / 10,
    });
    if (count < 9) {
      requestAnimationFrame(scroll(deltaY, count + 1));
    }
  };
};
