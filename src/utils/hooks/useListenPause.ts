import { RefObject, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export function useListenPause(audioRef: RefObject<HTMLAudioElement>) {
  const { currentTrack } = useSelector((state: RootState) => state.player);
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current[currentTrack?.paused ? 'pause' : 'play']();
  }, [currentTrack?.paused]);
}
