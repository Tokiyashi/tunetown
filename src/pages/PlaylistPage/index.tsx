import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { Playlist } from "@/common/types/playlist"
import { DEFAULT_PLAYLIST } from "@/common/constants/defaultPlaylist"
import UploadedMusicItem from "@/components/UploadedMusicItem"
import AddNewTrackButton from "@/components/AddNewTrackButton"
import Name from "@/pages/PlaylistPage/Name"
import Page from "@/components/Page"

const PlaylistPage = () => {
  const [playlist, setPlaylist] = useState<Playlist>(DEFAULT_PLAYLIST)
  const { id } = useParams()

  async function init() {
    const result = await axios.get(backendUrl + "/playlists/" + id)

    setPlaylist(result.data)
  }

  useEffect(() => {
    void init()
  }, [id])

  return (
    <Page title="">
      <Name playlist={playlist} />
      <AddNewTrackButton playlist={playlist} />
      {playlist.allTracks.map((item) => (
        <UploadedMusicItem item={item} key={item._id} />
      ))}
    </Page>
  )
}

export default PlaylistPage
