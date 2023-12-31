import React from 'react';
import Header from "@/components/Header";
import {Outlet} from "react-router-dom";
import DefaultSidebar from "@/components/Sidebar/DefaultSidebar";


const PageWrapper = () => {
  return (
    <div className='min-h-screen overflow-hidden max-h-screen text-white flex min-w-screen bg-app-bg'>
      <DefaultSidebar/>
      <div className="flex w-full overflow-auto relative flex-col">
        <Header/>
        <main className="flex w-full h-full flex-col overflow-auto p-5">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;