import Player from './Player';
import TrackList from './TrackList';
import React from 'react';
import NavigationItems from "@/pages/RoomPage/NavigationItems";

const MainPage = () => {
  return (
    <div className="min-h-full h-min flex gap-5 justify-start">
      <div className='md:flex hidden flex-col w-full'>
        <Player/>
        <div className="flex h-1/5 gap-3 ">
          <NavigationItems/>
          {/*<UserList />*/}
        </div>
      </div>
      <TrackList/>
    </div>
  );
};

export default MainPage;
