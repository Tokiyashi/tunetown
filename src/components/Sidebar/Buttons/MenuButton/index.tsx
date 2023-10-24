import React from 'react';

type Props = {
  item: { label: string; href: string };
};
const MenuButton = ({item}: Props) => {
  const {label, href} = item;

  return (
    <div className="w-full h-min flex hover:bg-dark-main rounded-2xl p-6">
      <span className="">{label}</span>
    </div>
  );
};

export default MenuButton;
