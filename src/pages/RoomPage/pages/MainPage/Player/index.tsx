'use client';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';
import Controls from './Controls';
import FlexFont from "@/common/styles/FlexFont";

const Player = () => {
  const {currentTrack} = useSelector((state: RootState) => state.room.room);

  return (
    <div className="items-center h-full rounded-2xl flex flex-col justify-center w-full">
      <FlexFont>{currentTrack?.title}</FlexFont>
      <FlexFont>{currentTrack?.artistName}</FlexFont>
      <Controls/>
    </div>
  );
};

export default Player;
