import React, { useEffect, useState } from "react"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { store } from "@/store"
import PlaylistItem from "./PlaylistItem"
import { Playlist } from "@/common/types/playlist"

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
    <div className="gap-3 flex flex-col">
      {playlists.map((item) => (
        <PlaylistItem item={item} key={item._id} />
      ))}
    </div>
  )
}

export default List
