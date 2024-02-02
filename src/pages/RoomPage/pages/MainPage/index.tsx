import TrackList from "./TrackList"
import React from "react"

const MainPage = () => {
  return (
    <div className="min-h-full h-min flex flex-col gap-5 justify-start">
      {/*<NavigationItems />*/}
      <TrackList />
    </div>
  )
}

export default MainPage
