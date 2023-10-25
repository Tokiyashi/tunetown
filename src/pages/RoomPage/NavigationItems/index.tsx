import React from 'react';
import NavItem from './NavItem';

const NavigationItems = () => {
  return (
    <div className="flex w-2/3">
      <NavItem label="Все треки" href={`../all-tracks`}/>
    </div>
  );
};

export default NavigationItems;
