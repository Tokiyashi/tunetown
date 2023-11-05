import React, { useState } from "react"
import Buttons from "@/components/Sidebar/Buttons"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { IconButton } from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"

const MobileSidebar = () => {
  const [show, setShow] = useState(false)

  return ( 
    <div className="w-min md:hidden inline">
      <IconButton
        size="large"
        onClick={() => {
          setShow((show) => !show)
        }}
      >
        {!show && <MenuRoundedIcon color="primary" />}
      </IconButton>
      {show && (
        <div className="w-screen absolute top-0 left-0 bg-app-bg z-10 md:flex max-h-screen p-5 flex flex-col justify-between min-h-full">
          <div>
            <IconButton
              size="large"
              onClick={() => {
                setShow((show) => !show)
              }}
            >
              <CloseRoundedIcon color="primary" />
            </IconButton>
            <h1 className="text-2xl">Tune Town</h1>
            <Buttons />
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileSidebar
