import React from 'react';

export function VideoPlayer({video, setState, state}) {

  function close(e) {
    if(e.target === e.currentTarget) {
      setState(false);
    }
  }

  return(
    <div className='video-wrapper' onClick={close}>
      <video src={video} autoPlay controls/>
    </div>
  )
}