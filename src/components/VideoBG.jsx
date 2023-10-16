import React from 'react';

function VideoBackground({ source }) {
  return (
    <div className='absolute w-full'>
      {/* Video goes here */}
      <video width='320' height='240' controls className='w-full'>
        <source src='/images/vid1.mp4' type='video/mp4' />
      </video>
    </div>
  );
}

export default VideoBackground;
