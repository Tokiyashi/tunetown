import { RefObject, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '@/store';
import { setCurrentTrack } from '@/store/slices/playerSlice';
import { goToNextTrack } from '@/utils/playerActions/goToNextTrack';
import Timeline from './Timeline';
import Volume from '@/components/AudioPlayer/Volume';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const Buttons = ({ audioRef }: Props) => {
  const [paused, setPaused] = useState(false);
  const { audioSrc, currentTrack } = useSelector(
    (state: RootState) => state.player
  );

  function handlePause() {
    if (!audioRef?.current) {
      return;
    }

    setPaused(!paused);
    audioRef.current[paused ? 'play' : 'pause']();
    store.dispatch(setCurrentTrack({ ...currentTrack, paused: !paused }));
  }

  function handleVolumeChange(volume: number) {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.volume = volume;
  }

  async function handleFinishTrack() {
    goToNextTrack();
  }

  useEffect(() => {
    setPaused(false);
  }, [audioSrc]);

  useEffect(() => {
    if (!audioRef?.current) {
      return;
    }
    setPaused(!!currentTrack?.paused);
  }, [currentTrack?.paused]);

  // const playerButtons = [
  //   {
  //     icon: PiShuffleBold,
  //     action: () => {},
  //   },
  //   {
  //     icon: FaBackward,
  //     action: () => {},
  //   },
  //   {
  //     icon: paused ? FaCirclePlay : FaPause,
  //     action: handlePause,
  //   },
  //   {
  //     action: handleFinishTrack,
  //     icon: FaForward,
  //   },
  //   {
  //     action: () => {},
  //     icon: BsRepeat,
  //   },
  // ];

  return (
    <div className="h-full bg-card-bg justify-between flex-col items-center w-full flex">
      <Timeline audioRef={audioRef} />
      <div className="flex justify-between h-1/3 overflow-hidden w-5/6">
        {/*{playerButtons.map(item => (*/}
        {/*  <Button*/}
        {/*    isIconOnly*/}
        {/*    key={item.icon.toString()}*/}
        {/*    className="p-1 h-full w-1/4 "*/}
        {/*    radius="full"*/}
        {/*    variant="light"*/}
        {/*    onClick={item.action}*/}
        {/*  >*/}
        {/*    {<item.icon className="w-full h-full" />}*/}
        {/*  </Button>*/}
        {/*))}*/}
      </div>
      <Volume onChange={handleVolumeChange} />
    </div>
  );
};

export default Buttons;
