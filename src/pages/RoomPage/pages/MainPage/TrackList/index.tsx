import MusicList from '@/components/MusicList';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';
import UploadedMusicItem from '@/components/UploadedMusicItem';

const TrackList = () => {
  const { room } = useSelector((state: RootState) => state.room);
  return (
    <div className="flex gap-2 h-full justify-start flex-col w-1/3">
      {room.currentTrack && (
        <>
          <span>Сейчас играет:</span>
          <UploadedMusicItem item={room.currentTrack} />
        </>
      )}
      <span>Очередь воспроизведения</span>
      <MusicList items={room.trackQueue} />
    </div>
  );
};

export default TrackList;
