import React from "react"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"
import DefaultSidebar from "@/components/Sidebar/DefaultSidebar"
import AudioPlayer from "@/components/AudioPlayer";
import {Box} from "@mui/material";

const MainWrapper = () => {
  return (
    <div className="min-h-screen overflow-hidden max-h-screen text-white flex min-w-screen bg-app-bg">
      <DefaultSidebar />
      <div className="flex w-full overflow-auto relative flex-col">
        <Header />
        <main className="flex w-full h-full flex-col overflow-auto p-5">
          <Outlet />
        </main>
          <Box>
          <AudioPlayer/>
          </Box>

      </div>
    </div>
  )
}

export default MainWrapper
