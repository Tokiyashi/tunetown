import React, { useEffect, useState } from "react"
import { Box, TextField } from "@mui/material"
import { Playlist } from "@/common/types/playlist"
import { wrapTextInput } from "@/utils/inputWrappers"
import { updatePlaylist } from "@/api/playlist"

type Props = {
  playlist: Playlist
}

const Name = ({ playlist }: Props) => {
  const [localValue, setLocalValue] = useState(playlist.name)

  async function handleUpdateTitle() {
    await updatePlaylist({ ...playlist, name: localValue })
  }

  useEffect(() => {
    setLocalValue(playlist.name)
  }, [playlist.name])

  return (
    <Box width="50%">
      <TextField
        InputProps={{ style: { fontSize: "2rem" } }}
        variant="standard"
        value={localValue}
        onBlur={handleUpdateTitle}
        onChange={wrapTextInput(setLocalValue)}
      />
    </Box>
  )
}

export default Name
