import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import { wrapTextInput } from "@/utils/inputWrappers"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { Playlist } from "@/common/types/playlist"
import { UploadedTrack } from "@/common/types/musicItem"

type Props = {
  playlist: Playlist
}

const AddNewTrackButton = ({ playlist }: Props) => {
  const [value, setValue] = useState("")

  async function handleAddTrack() {
    const res = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value,
      {
        headers: {
          "X-RapidAPI-Key":
            "48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    )
    const newTrack = await res.json()

    await axios.put(backendUrl + "/playlists", {
      ...playlist,
      allTracks: [
        ...playlist.allTracks,
        {
          url: newTrack.data[0].preview,
          artistName: newTrack.data[0].artist.name,
          title: newTrack.data[0].title,
        } as UploadedTrack,
      ],
    })
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <TextField fullWidth value={value} onChange={wrapTextInput(setValue)} />
      <Button variant="contained" onClick={() => handleAddTrack()}>
        Добавить новый трек
      </Button>
    </Box>
  )
}

export default AddNewTrackButton
