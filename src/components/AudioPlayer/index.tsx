import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React, { useRef } from 'react';
import TrackInfo from '@/components/AudioPlayer/TrackInfo';
import Buttons from './Buttons';
import { useListenPause } from '@/utils/hooks/useListenPause';
import { goToNextTrack } from '@/utils/playerActions/goToNextTrack';

const AudioPlayer = () => {
  const { currentTrack, audioSrc } = useSelector(
    (state: RootState) => state.player
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  useListenPause(audioRef);

  async function handleEnded() {
    if (!audioRef.current) {
      return;
    }
    goToNextTrack();
  }

  if (!currentTrack) {
    return <></>;
  }

  return (
    <div className="w-full overflow-hidden flex-col rounded-2xl h-full items-center justify-between flex bottom-5 bg-black-rgba">
      <audio
        onEnded={handleEnded}
        autoPlay
        ref={audioRef}
        title="asdasd"
        src={audioSrc}
      />
      <TrackInfo currentTrack={currentTrack} />
      <Buttons audioRef={audioRef} />
    </div>
  );
};

export default AudioPlayer;
