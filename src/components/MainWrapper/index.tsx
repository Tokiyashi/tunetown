import React, {useEffect} from "react"
import Header from "@/components/Header"
import {Outlet, useLocation, useNavigate} from "react-router-dom"
import DefaultSidebar from "@/components/Sidebar/DefaultSidebar"
import AudioPlayer from "@/components/AudioPlayer";
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

const MainWrapper = () => {
    const user =useSelector((state:RootState)=>state.user.currentUser)
    const navigate=useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!user._id && location.pathname !== '/login') {
            navigate("/registration")
        }
    }, [user._id, location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden max-h-screen text-white flex min-w-screen bg-app-bg">
      <DefaultSidebar />
      <div className="flex w-full overflow-auto relative flex-col">
        <Header />
        <main style={{maxWidth: '80%'}} className="flex w-full h-full m-auto flex-col overflow-auto p-5">
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
