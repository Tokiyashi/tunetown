import React from "react"
import { Playlist } from "@/common/types/playlist"
import { IconButton, Typography } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { useNavigate } from "react-router-dom"

type Props = {
  item: Playlist
}

const PlaylistItem = ({ item }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="bg-card-bg min-h-10 rounded-2xl p-4 items-center justify-between flex">
      <div className="flex flex-col">
        <Typography>{item.name}</Typography>
        <Typography>{item.allTracks.length} Треков</Typography>
      </div>
      <IconButton onClick={() => navigate("../playlist/" + item._id)}>
        <ArrowForwardIosRoundedIcon color="primary" />
      </IconButton>
    </div>
  )
}

export default PlaylistItem
