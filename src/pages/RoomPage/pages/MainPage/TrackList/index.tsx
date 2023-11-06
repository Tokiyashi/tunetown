import { useSelector } from "react-redux"
import { RootState } from "@/store"
import React from "react"
import UploadedMusicItem from "@/components/UploadedMusicItem"
import MusicList from "@/components/MusicList"
import SuggestTrack from "./SuggestTrack"

const TrackList = () => {
  const { room } = useSelector((state: RootState) => state.room)
  return (
    <div className="flex gap-2 h-full justify-start flex-col w-full">
      {room.currentTrack && (
        <>
          <span>Сейчас играет:</span>
          <UploadedMusicItem item={room.currentTrack} />
        </>
      )}
      {!!room.trackQueue.length && (
        <>
          <span>Очередь воспроизведения</span>
          <MusicList disablePlayPause items={room.trackQueue} />
        </>
      )}
      <SuggestTrack />
    </div>
  )
}

export default TrackList
