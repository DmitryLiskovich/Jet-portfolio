import React, { useState, useEffect } from 'react';
import './eg.scss';


export const EasterEgg = () => {
  const [str, setStr] = useState('');
  
  useEffect(() => {
    let timer;
    window.addEventListener('keydown', (e) => {
      timer && clearTimeout(timer);
      setStr(str => str+e.key);
      timer = setTimeout(() => setStr(''), 4000);
    })
  }, [])

  if(str.toLowerCase() !== 'jet') return <></>;

  return(
    <div className='egg'>
      <h2>Мои поздравления, вы нашли пасхалочку))</h2>
      <p>Вот вам яичко)
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="egg" className="svg-inline--fa fa-egg fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z"/></svg>
      </p>
    </div>
  )
}