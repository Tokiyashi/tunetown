import React from "react"
import { backendUrl } from "@/common/constants/url"
import axios from "axios"
import { Button } from "@mui/material"
import {AppDispatch, RootState, store} from "@/store"
import List from "./List"
import Page from "@/components/Page"
import {useDispatch, useSelector} from "react-redux";
import {fetchPlaylists} from "@/store/slices/playlistsSlice";
import {useNavigate} from "react-router-dom";

const PlaylistsPage = () => {
    const  dispatch: AppDispatch = useDispatch()
    const user = useSelector((state:RootState) => state.user.currentUser)
    const navigate=useNavigate()

  async function handleCreatePlaylist() {
   const response = await axios.post(backendUrl + "/playlists", {
      name: 'Плейлист без имени',
      creatorId: store.getState().user.currentUser._id,
      allTracks: [],
    })
    await dispatch(fetchPlaylists(user._id))
    navigate('/playlist/'+response.data._id)
  }

  return (
    <Page title="Плейлисты">
      <Button variant="contained" onClick={handleCreatePlaylist}>
        Создать плейлист
      </Button>
      <List />
    </Page>
  )
}

export default PlaylistsPage
