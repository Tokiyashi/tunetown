import React from "react"
import { Playlist } from "@/common/types/playlist"
import { Box, IconButton, Typography } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { useNavigate } from "react-router-dom"
import Container from "./styles/Container"

type Props = {
  item: Playlist
}

const PlaylistItem = ({ item }: Props) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate("../playlist/" + item._id)}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>{item.name}</Typography>
        <Typography>{item.allTracks.length}Треков</Typography>
      </Box>
      <IconButton>
        <ArrowForwardIosRoundedIcon color="primary" />
      </IconButton>
    </Container>
  )
}

export default PlaylistItem
