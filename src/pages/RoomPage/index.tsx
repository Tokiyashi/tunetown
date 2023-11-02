import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState, store } from "@/store"
import axios from "axios"
import { backendUrl, webSocketUrl } from "@/common/constants/url"
import { getRoom } from "@/store/slices/roomSlice"
import { io } from "socket.io-client"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { Typography } from "@mui/material"

const Index = () => {
  const { id } = useParams()
  const { currentUser } = useSelector((state: RootState) => state.user)
  const { allTracks, _id } = useSelector((state: RootState) => state.room.room)
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  async function fetchRoom(id: string) {
    try {
      const response = await axios.get(backendUrl + `/rooms/${id}`)
      store.dispatch(getRoom(response.data))
    } catch (e) {
      setError(true)
    }
  }

  useEffect(() => {
    if (!id) {
      return
    }

    void fetchRoom(id)
  }, [id])

  useEffect(() => {
    const socket = io(webSocketUrl)
    socket.on("connect", () => {
      socket.emit("join room", {
        roomId: id,
        userName: currentUser.name || "guest",
        userId: currentUser._id || "guestId",
      })
      console.log("connected to server")
    })

    socket.on("update room", (newValue) => {
      if (!newValue) {
        return
      }
      store.dispatch(getRoom(newValue))
      console.log(newValue)
    })

    if (!allTracks.length && _id) {
      navigate("./getting-started")
    }
    // window.addEventListener('beforeunload', ev => {
    //   ev.preventDefault();
    //   socket.emit('leave room', {
    //     roomId: id.toString(),
    //     userId: currentUser._id,
    //   });
    // });

    return () => {
      socket.off("connect")
      socket.off("disconnect")
      socket.emit("leave room", {
        roomId: id,
        userId: currentUser._id,
      })
    }
  }, [id, currentUser._id])

  return (
    <>
      {error ? <Typography>Кажется,что-то пошло не так...</Typography> : null}
      <Outlet />
    </>
  )
}

export default Index
