import Player from './Player';
import TrackList from './TrackList';
import React from 'react';
import NavigationItems from "@/pages/RoomPage/NavigationItems";

const MainPage = () => {
  return (
    <div className="min-h-full h-min flex flex-col gap-5 justify-start">
      <div className="gap-3 flex h-3/5">
        <Player/>
        <TrackList/>
      </div>
      <div className="flex h-2/5 gap-3 ">
        <NavigationItems/>
        {/*<UserList />*/}
      </div>
    </div>
  );
};

export default MainPage;
