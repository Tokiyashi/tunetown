import React from 'react';
import MobileSidebar from "@/components/Sidebar/MobileSidebar";
import UserMenu from "./UserMenu";

const Header = () => {

  return (
    <div className="justify-between p-4 md:justify-end flex align-middle">
      <MobileSidebar/>
      <UserMenu/>
    </div>
  );
};

export default Header;
