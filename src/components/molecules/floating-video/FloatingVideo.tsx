import { useEffect, useState } from 'react';
import { serviceGetFloatingvideo } from '@/api/services';
import './floating-video.scss';

export function FloatingVideo() {
  const [video, setVideo] = useState('');

  const closeVideo = () => {
    setActiveIframe(false);
  };
  const openVideo = () => {
    setActiveIframe(true);
  };

  useEffect(() => {
    serviceGetFloatingvideo().then(data => setVideo(data.href));
  });

  const [activeIframe, setActiveIframe] = useState(true);
  return (
    <>
      {!!video ? (
        <div
          className={activeIframe ? `floating-video active` : `floating-video`}
        >
          {activeIframe && (
            <>
              <button onClick={() => closeVideo()} className='close'>
                X
              </button>
              <span>Activar audio</span>
              <iframe
                src={video}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
              ></iframe>
            </>
          )}
          {!activeIframe && (
            <button onClick={() => openVideo()} className='open' />
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
