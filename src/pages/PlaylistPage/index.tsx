import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import UploadedMusicItem from "@/components/UploadedMusicItem"
import AddNewTrackButton from "@/components/AddNewTrackButton"
import Name from "@/pages/PlaylistPage/Name"
import Page from "@/components/Page"
import {Box, Typography} from "@mui/material"
import {AppDispatch, RootState} from "@/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlaylist} from "@/store/slices/playlistsSlice";

const PlaylistPage = () => {
  const playlist = useSelector((state:RootState)=>state.playlist.currentPlaylist)
  const { id } = useParams()
  const dispatch: AppDispatch = useDispatch()


  useEffect(() => {
    if (!id){
      return
    }
    dispatch(fetchPlaylist(id))
  }, [id])

  if (!playlist) {
    return <Page title="">Плейлист не найден, во дела... 🥲</Page>
  }

  return (
    <Page title="">
      <Box display="flex" sx={{justifyContent: 'space-between'}}>
        <Name playlist={playlist} />
      </Box>
      {playlist.allTracks.map((item) => (
        <UploadedMusicItem item={item} key={item._id} />
      ))}
      <Typography>Добавить новые треки:</Typography>
      <AddNewTrackButton playlist={playlist} />
    </Page>
  )
}

export default PlaylistPage
