import React from "react"
import { Playlist } from "@/common/types/playlist"
import {Box, IconButton, Typography} from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { useNavigate } from "react-router-dom"
import Container from "./styles/Container"
import DeleteIcon from "@mui/icons-material/Delete";
import {deletePlaylist} from "@/api/playlist";
import {AppDispatch, RootState} from "@/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlaylists} from "@/store/slices/playlistsSlice";

type Props = {
  item: Playlist
}

const PlaylistItem = ({ item }: Props) => {
  const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const user = useSelector((state:RootState)=>state.user.currentUser)
    const handleDelete =async ()=>{
      await deletePlaylist(item._id)
      await dispatch(fetchPlaylists(user._id))
    }

  return (
    <Container >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>{item.name}</Typography>
        <Typography>{item.allTracks.length}Треков</Typography>
      </Box>
        <Box>
      <IconButton onClick={() => navigate("../playlist/" + item._id)}>
        <ArrowForwardIosRoundedIcon color="primary" />
      </IconButton>
    <IconButton onClick={handleDelete}>
     <DeleteIcon color="primary"/>
    </IconButton>
        </Box>
    </Container>
  )
}

export default PlaylistItem
