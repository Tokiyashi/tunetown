import React from "react"
import { backendUrl } from "@/common/constants/url"
import axios from "axios"
import { Button } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit"
import {AppDispatch, RootState, store} from "@/store"
import List from "./List"
import Page from "@/components/Page"
import {useDispatch, useSelector} from "react-redux";
import {fetchPlaylists} from "@/store/slices/playlistsSlice";

const PlaylistsPage = () => {
    const  dispatch: AppDispatch = useDispatch()
    const user = useSelector((state:RootState) => state.user.currentUser)
  async function handleCreatePlaylist() {
    await axios.post(backendUrl + "/playlists", {
      name: nanoid(),
      creatorId: store.getState().user.currentUser._id,
      allTracks: [],
    })
    await dispatch(fetchPlaylists(user._id))
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
