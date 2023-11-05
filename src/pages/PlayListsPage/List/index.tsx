import React, { useEffect, useState } from "react"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { store } from "@/store"
import PlaylistItem from "./PlaylistItem"
import { Playlist } from "@/common/types/playlist"
import Container from "./styles/Container"

const List = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  async function init() {
    const response = await axios.get(
      backendUrl +
        "/playlists?creatorId=" +
        store.getState().user.currentUser._id
    )

    setPlaylists(response.data)
  }

  useEffect(() => {
    void init()
  }, [])

  return (
    <Container>
      {playlists.map((item) => (
        <PlaylistItem item={item} key={item._id} />
      ))}
    </Container>
  )
}

export default List
