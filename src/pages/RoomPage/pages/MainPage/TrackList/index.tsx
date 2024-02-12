import { useSelector } from "react-redux"
import { RootState } from "@/store"
import React from "react"
import UploadedMusicItem from "@/components/UploadedMusicItem"
import MusicList from "@/components/MusicList"
import SuggestTrack from "./SuggestTrack"
import {Box, Typography} from "@mui/material";

const TrackList = () => {
  const { room } = useSelector((state: RootState) => state.room)
  return (
      <Box height="100%" width="100%" display="flex" sx={{justifyContent: 'space-between', flexDirection:'column'}}>
    <div className="flex gap-2 justify-start flex-col w-full">
      {room.currentTrack && (
        <>
          <span>Сейчас играет:</span>
          <UploadedMusicItem hidePlayPause item={room.currentTrack} />
        </>
      )}
      {!!room.trackQueue.length && (
        <>
          <span>Очередь воспроизведения</span>
          <MusicList disablePlayPause items={room.trackQueue} />
        </>
      )}
      {room.trackQueue.length < 6 && <Typography> Музыка вое-вот закончится, но не переживайте, скоро плейлсит начнется сначала!⭐ </Typography>}
    </div>
    <SuggestTrack />
      </Box>
  )
}

export default TrackList
