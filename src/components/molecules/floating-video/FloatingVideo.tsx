import { useState } from 'react';
import './floating-video.scss';

export function FloatingVideo() {
  const videoUrl =
    'https://www.youtube-nocookie.com/embed/_VPJFU5uw20?autoplay=1&mute=1&rel=0';

  const closeVideo = () => {
    setActiveIframe(false);
  };
  const openVideo = () => {
    setActiveIframe(true);
  };

  const [activeIframe, setActiveIframe] = useState(true);
  return (
    <div className={activeIframe ? `floating-video active` : `floating-video`}>
      {activeIframe && (
        <>
          <button onClick={() => closeVideo()} className='close'>
            X
          </button>
          <span>Activar audio</span>
          <iframe
            src={videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
          ></iframe>
        </>
      )}
      {!activeIframe && <button onClick={() => openVideo()} className='open' />}
    </div>
  );
}
