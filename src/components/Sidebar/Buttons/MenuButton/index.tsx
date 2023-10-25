import React from 'react';
import {Link} from "react-router-dom";

type Props = {
  item: { label: string; href: string };
};
const MenuButton = ({item}: Props) => {
  const {label, href} = item;

  return (
    <Link to={href}>
      <div className="w-full h-min flex hover:bg-dark-main rounded-2xl p-6">
        <span className="">{label}</span>
      </div>
    </Link>
  );
};

export default MenuButton;
