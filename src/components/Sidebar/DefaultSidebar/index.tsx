import React from "react"
import Buttons from "@/components/Sidebar/Buttons"
import AudioPlayer from "@/components/AudioPlayer"
import { Typography } from "@mui/material"

const DefaultSidebar = () => {
  return (
    <div className="min-w-1/6 md:flex max-h-screen p-5 hidden flex-col justify-between min-h-full">
      <div>
        <Typography fontSize="1.8rem">Tune Town</Typography>
        <Buttons />
      </div>
      <AudioPlayer />
    </div>
  )
}

export default DefaultSidebar
