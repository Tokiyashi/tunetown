import React, {RefObject, useEffect, useState} from 'react';
import {convertToMinutes} from '@/utils/convertToMinutes';
import { Slider} from "@mui/material";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
  onChange: (value: number) => void;
};

const Timeline = ({audioRef, onChange}: Props) => {
  const [currentTimeProgress, setCurrentTimeProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const handleCurrentTimeChange = (value: number|number[]) => {

    if(!audioRef.current||Array.isArray(value)){
      return;
    }
    
    const newCurrentTime = value * (audioRef.current.duration / 100);
    onChange(newCurrentTime);
  }

  useEffect(() => {
    const t = setInterval(() => {
      if (!audioRef.current) {
        return;
      }

      const timeProgress =
        (audioRef.current?.currentTime / audioRef.current?.duration) * 100;
      setCurrentTimeProgress(timeProgress);
      setCurrentTime(audioRef.current?.currentTime);
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
      <div className="w-full gap-2 flex">
        <h3>{convertToMinutes(currentTime)}</h3>

        <Slider
            size="small"
            color='primary'
            value={currentTimeProgress || 0}
            onChange={(_, value) => handleCurrentTimeChange(value)}
        />
          <h3>{convertToMinutes(audioRef.current?.duration || 0)}</h3>
      </div>
  );
};

export default Timeline;
