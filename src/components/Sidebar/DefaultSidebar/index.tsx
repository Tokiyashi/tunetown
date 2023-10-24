import React from 'react';
import Buttons from '@/components/Sidebar/Buttons';
import AudioPlayer from '@/components/AudioPlayer';

const DefaultSidebar = () => {
  return (
    <div className="w-1/6 md:flex max-h-screen p-5 hidden flex-col justify-between min-h-full">
      <div>
        <h1 className="text-2xl">Tune Town</h1>
        <Buttons />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default DefaultSidebar;
