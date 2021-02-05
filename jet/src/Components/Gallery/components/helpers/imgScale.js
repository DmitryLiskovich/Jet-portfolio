export function imgScale(el, allEl) {
  const wrapper = el?.parentElement.parentElement;
  
  if(allEl.length < 4) {
    return;
  }
  
  if(el === allEl[0] || el === allEl[1]) {
    el.parentElement.style.flexShrink = 0.95;
    allEl[2].parentElement.style.flexShrink = 1;
  }
  if(el === allEl[2] || el === allEl[3]) {
    el.parentElement.style.flexShrink = 0.95;
    allEl[0].parentElement.style.flexShrink = 1;
  }

  const arr = [1,2,3,4];

  if(wrapper) {
    switch(el) {
      case allEl[0] : addStyle(wrapper, arr, 1); break;
      case allEl[1] : addStyle(wrapper, arr, 2); break;
      case allEl[2] : addStyle(wrapper, arr, 3); break;
      case allEl[3] : addStyle(wrapper, arr, 4); break;
      default: break;
    }
  }
}

function addStyle(el, arr, num) {
  arr.forEach((item) => el.classList.remove(`hover-on-${item}`)); 
  el.classList.add(`hover-on-${num}`)
}