'use client';

import { useState, useRef } from 'react';

// components/Video.js
const Video = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const handleUnmute = () => {
    if (muted) {
      videoRef.current.muted = false;
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
        <source src="/assets/vid/Teaser_H264.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
