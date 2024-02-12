import { backendUrl } from "@/common/constants/url"
import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import theBandParty from "@/assets/icons/The Band Party.svg"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {nanoid} from "@reduxjs/toolkit";
const Room = () => {
  const { currentUser } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()

  async function handleCreateRoom() {
    const request = await axios.post(backendUrl + "/rooms", {
      name: nanoid(),
      creatorId: currentUser?._id,
    })
    const { _id } = request.data
    navigate(`/room/${_id}/getting-started`)
  }

  return (
    <div className="h-full w-full flex justify-center items-start">
        <div className="flex w-1/2 flex-col h-1/2 gap-4 bg-card-bg rounded-2xl">
          <img
            alt="Band"
            src={theBandParty}
            className="rounded-2xl flex w-full h-full"
          />
          <Button
            variant="contained"
            className="w-full"
            onClick={handleCreateRoom}
          >
            <h2> Создать новую комнату </h2>
          </Button>
        </div>
    </div>
  )
}

export default Room
