import React from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {Outlet} from "react-router-dom";


const PageWrapper = () => {
  return (
    <div className='min-h-screen text-white flex min-w-screen bg-app-bg'>
      <Sidebar/>
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