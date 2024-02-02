import React from "react"
import { UploadedTrack } from "@/common/types/musicItem"
import PlayPause from "./PlayPause"
import { RootState, store } from "@/store"
import { setCurrentTrack } from "@/store/slices/playerSlice"
import { useSelector } from "react-redux"
import MoreOptions from "./MoreOptions"
import { Box, Button } from "@mui/material"
import { addTrackToQueue } from "@/store/slices/roomSlice"
import BaseMusicItem from "@/common/styles/BaseMusicItem"
import TitleAndAuthor from "./TitleAndAuthor"

type Props = {
  item: UploadedTrack
  allowSuggest?: boolean
  hidePlayPause?: boolean
}

const UploadedMusicItem = ({ item, hidePlayPause, allowSuggest }: Props) => {
  const play = () => store.dispatch(setCurrentTrack({ ...item, paused: false }))
  const pause = () => store.dispatch(setCurrentTrack({ ...item, paused: true }))

  const { currentTrack } = useSelector((state: RootState) => state.player)
  const { currentTrack: playerTrack } = useSelector(
    (state: RootState) => state.player
  )

  const isPausedTrack = !!playerTrack?.paused
  //!isAdmin || disablePlayPause
  return (
    <BaseMusicItem>
      <Box sx={{ display: "flex", gap: '1rem' }}>
        <PlayPause
          hidden={hidePlayPause}
          isPausedTrack={isPausedTrack || !playerTrack}
          onPause={pause}
          onPlay={play}
          currentlyOpened={currentTrack?._id === item._id}
        />
        <TitleAndAuthor item={item} />
        {/*{item?._id && currentTrack?._id === item._id && (*/}
        {/*  <Typography color="green">Сейчас играет!</Typography>*/}
        {/*)}*/}
      </Box>
      {allowSuggest && (
        <Button onClick={() => store.dispatch(addTrackToQueue(item))}>
          Предложить трек!
        </Button>
      )}
      <MoreOptions />
    </BaseMusicItem>
  )
}

export default UploadedMusicItem
