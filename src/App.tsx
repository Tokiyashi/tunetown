import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import React from "react";
import PageWrapper from "@/components/PageWrapper";
import NotFoundPage from "@/pages/NotFoundPage";
import RoomPage from "@/pages/RoomPage";
import MainPage from "@/pages/RoomPage/pages/MainPage";
import ConnectRoomPage from "@/pages/ConnectRoomPage";
import AllTracksPage from "@/pages/RoomPage/pages/AllTracksPage";
import {useIsLoggedUser} from "@/utils/hooks/useIsLoggedUser";
import RegistrationPage from "@/pages/RegistrationPage";
import MyRoomsPage from "@/pages/MyRoomsPage";
import TrackQueuePage from "@/pages/RoomPage/pages/TrackQueuePage";
import StartRoomPage from "@/pages/RoomPage/pages/StartRoomPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "my-rooms",
        element: <MyRoomsPage/>
      },
      {
        path: "registration",
        element: <RegistrationPage/>
      },
      {
        path: "room",
        element: <ConnectRoomPage/>
      },
      {
        path: "room/:id/",
        element: <RoomPage/>,
        children: [{
          path: 'all-tracks',
          element: <AllTracksPage/>
        }, {
          path: 'main',
          element: <MainPage/>
        }, {
          path: 'track-queue',
          element: <TrackQueuePage/>
        },
          {
            path: 'getting-started',
            element: <StartRoomPage/>
          },
        ]
      }
    ]
  },
]);


function App() {
  useIsLoggedUser()

  return (
    <RouterProvider router={router}/>
  )
}

export default App
