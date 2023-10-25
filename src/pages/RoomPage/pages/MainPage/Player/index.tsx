'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Controls from './Controls';

const Player = () => {
  const { currentTrack } = useSelector((state: RootState) => state.room.room);

  return (
    <div className="items-center h-full rounded-2xl bg-card-bg flex flex-col justify-center w-2/3">
      <h2 className="text-7xl">{currentTrack?.title}</h2>
      <h3 className="text-5xl">{currentTrack?.artistName}</h3>
      <Controls />
    </div>
  );
};

export default Player;
