import React from "react"
import { backendUrl } from "@/common/constants/url"
import axios from "axios"
import { Button } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit"
import { store } from "@/store"
import List from "./List"
import Page from "@/components/Page"

const PlaylistsPage = () => {
  async function handleCreatePlaylist() {
    await axios.post(backendUrl + "/playlists", {
      name: nanoid(),
      creatorId: store.getState().user.currentUser._id,
      allTracks: [],
    })
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
