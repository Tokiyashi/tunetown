import {RefObject, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState, store} from '@/store';
import {setCurrentTrack} from '@/store/slices/playerSlice';
import {goToNextTrack} from '@/utils/playerActions/goToNextTrack';
import Timeline from './Timeline';
import Volume from '@/components/AudioPlayer/Volume';
import {IconButton} from "@mui/material";
import ShuffleOnRoundedIcon from '@mui/icons-material/ShuffleOnRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const Buttons = ({audioRef}: Props) => {
  const [paused, setPaused] = useState(false);
  const {audioSrc, currentTrack} = useSelector(
    (state: RootState) => state.player
  );

  function handlePause() {
    if (!audioRef?.current) {
      return;
    }

    setPaused(!paused);
    audioRef.current[paused ? 'play' : 'pause']();
    store.dispatch(setCurrentTrack({...currentTrack, paused: !paused}));
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

  const playerButtons = [
    {
      icon: ShuffleOnRoundedIcon,
      action: () => {
      },
    },
    {
      icon: SkipPreviousRoundedIcon,
      action: () => {
      },
    },
    {
      icon: paused ? PlayCircleRoundedIcon : PauseCircleFilledRoundedIcon,
      action: handlePause,
    },
    {
      action: handleFinishTrack,
      icon: SkipNextRoundedIcon,
    },
    {
      action: () => {
      },
      icon: LoopRoundedIcon,
    },
  ];

  return (
    <div className="h-full bg-card-bg justify-between flex-col items-center w-full flex">
      <Timeline audioRef={audioRef}/>
      <div className="flex justify-between h-1/3 overflow-hidden w-5/6">
        {playerButtons.map((item, index) => (
          <IconButton
            sx={{width: '20%'}}
            key={index}
            onClick={item.action}
          >
            {<item.icon color='primary'/>}
          </IconButton>
        ))}
      </div>
      <Volume onChange={handleVolumeChange}/>
    </div>
  );
};

export default Buttons;
