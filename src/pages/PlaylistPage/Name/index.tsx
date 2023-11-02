import React from "react"
import { Box, IconButton, Typography } from "@mui/material"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import { Playlist } from "@/common/types/playlist"

type Props = {
  playlist: Playlist
}

const Name = ({ playlist }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography fontSize="1.5rem">{playlist.name}</Typography>
      <IconButton color="primary">
        <EditRoundedIcon />
      </IconButton>
    </Box>
  )
}

export default Name
