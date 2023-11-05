import React from "react"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"
import DefaultSidebar from "@/components/Sidebar/DefaultSidebar"

const MainWrapper = () => {
  return (
    <div className="min-h-screen overflow-hidden max-h-screen flex min-w-screen">
      <DefaultSidebar />
      <div className="flex w-full overflow-auto relative flex-col">
        <Header />
        <main className="flex w-full h-full flex-col overflow-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainWrapper
