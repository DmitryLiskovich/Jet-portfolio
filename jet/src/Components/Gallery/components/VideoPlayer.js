import React from 'react';

export function VideoPlayer({video, setState, state}) {

  function close(e) {
    if(e.target === e.currentTarget) {
      setState(false);
    }
  }

  return(
    <div className='video-wrapper' onClick={close}>
        <iframe
        title='video-from-youtube'
        src={video} 
        className={state ? 'active' : ''}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
      </div>
  )
}