import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { wrapTextInput } from "@/utils/inputWrappers"
import { updateRoom } from "@/api/room"
import { UploadedTrack } from "@/common/types/musicItem"
import { Button, Input } from "@mui/material"

const AddNewTrack = () => {
  const { room } = useSelector((state: RootState) => state.room)
  const [search, setSearch] = useState("")

  async function handleAddTrack() {
    const res = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search,
      {
        headers: {
          "X-RapidAPI-Key":
            "48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    )
    const newTrack = await res.json()

    await updateRoom({
      ...room,
      allTracks: [
        ...room.allTracks,
        {
          url: newTrack.data[0].preview,
          artistName: newTrack.data[0].artist.name,
          title: newTrack.data[0].title,
        } as UploadedTrack,
      ],
    })
  }

  return (
    <div className="flex items-center">
      <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
        <Input
          value={search}
          className="flex w-3/5"
          onChange={wrapTextInput(setSearch)}
        />
        <Button onClick={handleAddTrack}>трек из Deezer</Button>
      </div>
      {/*<div*/}
      {/*  className="gap-2 p-3 border-dashed max-h-24 border-2 border-main rounded-lg justify-center flex-col w-full bg-card-bg flex items-center">*/}
      {/*  <span className="text-gray-300">Перетащите файл сюда</span>*/}
      {/*</div>*/}
    </div>
  )
}

export default AddNewTrack
