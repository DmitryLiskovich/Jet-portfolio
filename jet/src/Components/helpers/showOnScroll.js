export const showOnScroll = (sections, path) => {
  const ofset =
    path === 'left' ? (window.innerWidth * 3) / 4 : window.innerHeight * 0.8;
  Array.prototype.forEach.call(sections, (item) => {
    const calc = item.getBoundingClientRect();
    if (calc[path] < (ofset * 3) / 4 && -calc[path] < (ofset * 3) / 4) {
      item.classList.add('active');
    }
  });
};
