import React from 'react';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import {IconButton} from '@mui/material';

type Props = {
  onPlay: () => void;
  onPause: () => void;
  isPausedTrack: boolean;
  currentlyOpened: boolean;
};
const PlayPause = ({
     currentlyOpened,
     onPlay,
     onPause,
     isPausedTrack,
   }: Props) => {
  return currentlyOpened && !isPausedTrack ? (
    <IconButton onClick={onPause}>
      <PauseCircleFilledRoundedIcon color='primary'/>
    </IconButton>
  ) : (
    <IconButton onClick={onPlay}>
      <PlayCircleRoundedIcon color='primary'/>
    </IconButton>
  );
};

export default PlayPause;
