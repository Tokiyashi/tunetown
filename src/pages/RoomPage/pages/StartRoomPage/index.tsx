import React from "react"
import { Button, Typography } from "@mui/material"
import MusicList from "@/components/MusicList"
import { useSelector } from "react-redux"
import { RootState, store } from "@/store"
import AddNewTrack from "@/pages/RoomPage/pages/AllTracksPage/AddNewTrack"
import { useNavigate } from "react-router-dom"
import { startRoom } from "@/store/slices/roomSlice"
import { setCurrentTrack } from "@/store/slices/playerSlice"

const StartRoomPage = () => {
  const { allTracks } = useSelector((state: RootState) => state.room.room)
  const navigate = useNavigate()

  async function handleStartRoom() {
    store.dispatch(startRoom())
    store.dispatch(setCurrentTrack(store.getState().room.room.allTracks[0]))
    navigate("../main")
  }

  return (
    <div className="flex flex-col gap-2 justify-between h-full">
      <div>
        <Typography>собери для начала свой треклист</Typography>
        <MusicList items={allTracks} />
      </div>
      <div>
        <AddNewTrack />
        <Button
          onClick={handleStartRoom}
          fullWidth
          disabled={!allTracks.length}
          variant="contained"
        >
          Всё готово
        </Button>
      </div>
    </div>
  )
}

export default StartRoomPage
