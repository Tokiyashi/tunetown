import React from "react"
import MobileSidebar from "@/components/Sidebar/MobileSidebar"
import UserMenu from "./UserMenu"
import {IconButton} from "@mui/material";
import {setOpenedSidebar} from "@/store/slices/playerSlice";
import {MenuOpen} from "@mui/icons-material";
import {AppDispatch} from "@/store";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch: AppDispatch = useDispatch()


  return (
    <div className="justify-between w-full p-4 flex align-middle">
      <IconButton onClick={()=>dispatch(setOpenedSidebar(true))} ><MenuOpen sx={{height:'3rem', width:'3rem'}} color="secondary"/></IconButton>
      <MobileSidebar />
      <UserMenu />
    </div>
  )
}

export default Header
