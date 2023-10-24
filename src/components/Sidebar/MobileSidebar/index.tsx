import React, {useState} from 'react';
import Buttons from '@/components/Sidebar/Buttons';
import AudioPlayer from '@/components/AudioPlayer';

const MobileSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-min md:hidden inline">
      <button
        onClick={() => {
          setShow(show => !show);
        }}
      >
        {show ? (
          <>show</>
        ) : (
          <>hide</>
        )}
      </button>
      {show && (
        <div className="w-screen md:flex max-h-screen p-5 flex flex-col justify-between min-h-full">
          <div>
            <h1 className="text-2xl">Tune Town</h1>
            <Buttons/>
          </div>
          <AudioPlayer/>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
