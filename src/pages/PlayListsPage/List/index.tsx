import React, { useEffect } from "react"
import {AppDispatch, RootState} from "@/store"
import PlaylistItem from "./PlaylistItem"
import Container from "./styles/Container"
import {useDispatch, useSelector} from "react-redux";
import { fetchPlaylists } from "@/store/slices/playlistsSlice";

const List = () => {
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState )=> state.user.currentUser)
  const playlists = useSelector((state: RootState )=> state.playlist.playlists)

  useEffect(() => {
    dispatch(fetchPlaylists(user._id))
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
