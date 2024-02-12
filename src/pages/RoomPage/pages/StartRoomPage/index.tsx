import React, {useEffect, useState} from "react"
import {Box, Button, Typography } from "@mui/material"
import MusicList from "@/components/MusicList"
import {useDispatch, useSelector} from "react-redux"
import {AppDispatch, RootState, store} from "@/store"
import { useNavigate } from "react-router-dom"
import { startRoom } from "@/store/slices/roomSlice"
import { setCurrentTrack } from "@/store/slices/playerSlice"
import {fetchPlaylists} from "@/store/slices/playlistsSlice";
import PlaylistsExplorerPopup from "@/components/popups/PlaylistsExplorerPopup";

const StartRoomPage = () => {
  const { allTracks } = useSelector((state: RootState) => state.room.room)
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState )=> state.user.currentUser)
  const [openedExplorer, setOpenedExplorer] = useState(false)
  async function handleStartRoom() {
    store.dispatch(startRoom())
    store.dispatch(setCurrentTrack(store.getState().room.room.allTracks[0]))
    navigate("../main")
  }

    // const playlists = useSelector((state: RootState )=> state.playlist.playlists)

    useEffect(() => {
      dispatch(fetchPlaylists(user._id))
    }, [])


    return (
    <div className="flex flex-col gap-2 justify-between h-full">
      <div className='w-full justify-center items-center flex flex-col'>
        <Typography fontSize={20} fontWeight="bold">Cобери для начала свой треклист</Typography>
        <MusicList items={allTracks} />
        <Box>
          <Button onClick={()=>setOpenedExplorer(true)} variant='contained'>Импортировать треки из плейлиста</Button>
          <PlaylistsExplorerPopup open={openedExplorer} onClose={()=>setOpenedExplorer(false)}/>
        </Box>
      </div>
      <div>
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
