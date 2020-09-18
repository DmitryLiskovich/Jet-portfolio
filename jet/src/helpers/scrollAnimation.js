export function scrollAnimation(from, to, section) {
  let animId;
  animate();
  function animate() {
    if((from < to && to - from > 0) || (from > to && to - from < 0)) {
      from += (to-from)/5;
      Array.prototype.forEach.call(section, (item) => {
        item.style.transform = `translateX(-${from + (to-from)/5}px)`;
      })
      animId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animId);
    }
  }
}