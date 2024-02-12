import React from "react"
import Buttons from "@/components/Sidebar/Buttons"
import {Box, Drawer, Typography} from "@mui/material"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {setOpenedSidebar} from "@/store/slices/playerSlice";

const DefaultSidebar = () => {
    const open = useSelector((state:RootState)=>state.player.openedSidebar)
    const dispatch: AppDispatch = useDispatch()
  return (
    <Drawer onClick={()=>dispatch(setOpenedSidebar(false))} open={open} onClose={()=>dispatch(setOpenedSidebar(false))}>
      <Box display="flex" p='1rem' sx={{flexDirection:'column'}}>
    <Typography color='secondary' fontSize="1.8rem">Tune Town</Typography>
    <Buttons />
      </Box>
    </Drawer>
  )
}

export default DefaultSidebar
