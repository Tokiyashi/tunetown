import TrackList from "./TrackList"
import React from "react"
import NavigationItems from "@/pages/RoomPage/NavigationItems"

const MainPage = () => {
  return (
    <div className="min-h-full h-min flex-col items-center w-full flex md:w-1/3 m-auto gap-5 justify-start">
      <TrackList />
      <NavigationItems />
      {/*<UserList />*/}
    </div>
  )
}

export default MainPage
