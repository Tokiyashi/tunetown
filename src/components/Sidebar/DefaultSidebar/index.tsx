import React, {useState} from "react"
import Buttons from "@/components/Sidebar/Buttons"
import {Box, Drawer, IconButton, Typography} from "@mui/material"
import {MenuOpen} from "@mui/icons-material"

const DefaultSidebar = () => {
  const [open, setOpen]= useState(false)
  return (
      <Box width="3rem">
        <IconButton onClick={()=>setOpen(true)} ><MenuOpen sx={{height:'3rem', width:'3rem'}} color="secondary"/></IconButton>
        <Drawer onClick={()=>setOpen(false)} open={open} onClose={()=>setOpen(false)}>
          <Box display="flex" p='1rem' sx={{flexDirection:'column'}}>
        <Typography color='secondary' fontSize="1.8rem">Tune Town</Typography>
        <Buttons />
          </Box>
        </Drawer>
      </Box>
  )
}

export default DefaultSidebar
