import React from "react"
import MusicList from "@/components/MusicList"
import { RootState } from "@/store"
import { useSelector } from "react-redux"
import RoomPageWrapper from "@/components/RoomPageWrapper"

const SuggestTrackPage = () => {
  const { allTracks } = useSelector((state: RootState) => state.room.room)

  return (
    <RoomPageWrapper title="Предложить трек">
      <MusicList allowSuggest items={allTracks} />
    </RoomPageWrapper>
  )
}

export default SuggestTrackPage
