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
        }]
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
