import Player from './Player';
import TrackList from './TrackList';
import React from 'react';
import NavigationItems from "@/pages/RoomPage/NavigationItems";

const MainPage = () => {
  return (
    <div className="min-h-full h-min flex flex-col gap-5 justify-start">
      <div className="gap-3 flex md:flex-row w-full flex-col h-full">
        <Player/>
        <TrackList/>
      </div>
      <div className="flex  h-1/5 gap-3 ">
        <NavigationItems/>
        {/*<UserList />*/}
      </div>
    </div>
  );
};

export default MainPage;
