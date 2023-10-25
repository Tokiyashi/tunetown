import React from 'react';

type Props = {
  item: { name: string; id: string };
};

const UserItem = ({ item }: Props) => {
  return (
    <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      <span>{item.name}</span>
    </div>
  );
};

export default UserItem;
