import React from "react"
import UploadedMusicItem from "@/components/UploadedMusicItem"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

const RoomMusicList = () => {
  const { trackQueue } = useSelector((state: RootState) => state.room.room)

  return (
    <div className="w-full rounded-2xl overflow-auto flex h-min justify-start items-center flex-col gap-2">
      {trackQueue?.map((item, index) => (
        <UploadedMusicItem key={index} item={item} />
      ))}
    </div>
  )
}

export default RoomMusicList
