import { useState } from 'react';
import './floating-video.scss';

export function FloatingVideo() {
  const [video, setVideo] = useState(
    'https://www.youtube-nocookie.com/embed/_VPJFU5uw20?autoplay=1&mute=1&rel=0'
  );

  const closeVideo = () => {
    setVideo('');
    setActiveIframe(false);
  };

  const [activeIframe, setActiveIframe] = useState(true);
  return (
    <>
      {activeIframe ? (
        <div className='floating-video'>
          <button onClick={() => closeVideo()}>X</button>
          <span>Activar audio</span>
          <iframe
            src={video}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
          ></iframe>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
