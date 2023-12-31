import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "@/pages/LoginPage"
import React from "react"
import NotFoundPage from "@/pages/NotFoundPage"
import RoomPage from "@/pages/RoomPage"
import MainPage from "@/pages/RoomPage/pages/MainPage"
import ConnectRoomPage from "@/pages/ConnectRoomPage"
import AllTracksPage from "@/pages/RoomPage/pages/AllTracksPage"
import { useIsLoggedUser } from "@/utils/hooks/useIsLoggedUser"
import RegistrationPage from "@/pages/RegistrationPage"
import MyRoomsPage from "@/pages/MyRoomsPage"
import TrackQueuePage from "@/pages/RoomPage/pages/TrackQueuePage"
import StartRoomPage from "@/pages/RoomPage/pages/StartRoomPage"
import { CssBaseline, Typography } from "@mui/material"
import StoreProvider from "@/store/storeProvider"
import PlaylistsPage from "@/pages/PlayListsPage"
import SuggestTrackPage from "@/pages/RoomPage/pages/SuggestTrackPage"
import PlaylistPage from "@/pages/PlaylistPage"
import MainWrapper from "@/components/MainWrapper"
import CustomThemeProvider from "./components/CustomThemeProvider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWrapper />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "playlists",
        element: <PlaylistsPage />,
      },
      {
        path: "playlist/:id",
        element: <PlaylistPage />,
      },
      {
        path: "my-rooms",
        element: <MyRoomsPage />,
      },
      {
        path: "settings",
        element: <Typography>Work in progress</Typography>,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "room",
        element: <ConnectRoomPage />,
      },
      {
        path: "room/:id/",
        element: <RoomPage />,
        children: [
          {
            path: "all-tracks",
            element: <AllTracksPage />,
          },
          {
            path: "suggest",
            element: <SuggestTrackPage />,
          },
          {
            path: "main",
            element: <MainPage />,
          },
          {
            path: "track-queue",
            element: <TrackQueuePage />,
          },
          {
            path: "getting-started",
            element: <StartRoomPage />,
          },
        ],
      },
    ],
  },
])

function App() {
  useIsLoggedUser()

  return (
    <StoreProvider>
      <CustomThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </StoreProvider>
  )
}

export default App
