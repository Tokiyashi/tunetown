import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';
import AddNewTrack from './AddNewTrack';
import {useIsAdmin} from '@/utils/hooks/useIsRoomAdmin';
import MusicList from "@/components/MusicList";
import RoomPageWrapper from "@/components/RoomPageWrapper";

const AllTracksPage = () => {
  const {room} = useSelector((state: RootState) => state.room);
  const isAdmin = useIsAdmin();

  return (
    <RoomPageWrapper title='Все треки'>
      <div className="flex h-full flex-col justify-between">
        <div className="w-full flex-col p-2 gap-3 h-full rounded-2xl overflow-auto flex">
          <MusicList disablePlayPause items={room.allTracks}/>
        </div>
        {isAdmin && <AddNewTrack/>}
      </div>
    </RoomPageWrapper>
  );
};

export default AllTracksPage;
