import React from 'react';
import MobileSidebar from "@/components/Sidebar/MobileSidebar";
import UserMenu from "./UserMenu";

const Header = () => {

  return (
    <div className="justify-between md:justify-end p-5 flex align-middle">
      <MobileSidebar/>
      <UserMenu/>
    </div>
  );
};

export default Header;
