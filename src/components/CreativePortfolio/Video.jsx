'use client';

import { useState, useRef, useEffect } from 'react';

const pcLink = '/assets/vid/headline.mp4';
const mobileLink =
  'https://res.cloudinary.com/dwvg8msdh/video/upload/v1701767766/Data%20for%20web/Video/FLOW_SHOWREELS_VERTICAL_gdzqon.mp4';
// components/Video.js
const Video = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const sourceRef = useRef(pcLink);

  useEffect(() => {
    updateVideoLink();
    window.addEventListener('resize', updateVideoLink);

    return () => {
      window.removeEventListener('resize', updateVideoLink);
    };
  }, []);

  const updateVideoLink = () => {
    let newVideoLink = window.innerWidth <= 600 ? mobileLink : pcLink;
    // Change the source URL
    sourceRef.current.src = newVideoLink;
    // Load and play the new video
    videoRef.current.load();
    videoRef.current.play();
  };

  const handleUnmute = () => {
    if (muted) {
      videoRef.current.muted = false;
      videoRef.current.s;
      setMuted(false);
    } else {
      videoRef.current.muted = true;
      setMuted(true);
    }
  };

  return (
    <div className="video-headline">
      <video
        onClick={handleUnmute}
        autoPlay
        loop
        muted={muted}
        playsInline
        ref={videoRef}
      >
        <source ref={sourceRef} src={pcLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
