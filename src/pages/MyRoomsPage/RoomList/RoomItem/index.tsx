import React from 'react';
import {Room} from '@/common/types/room';
import {Link} from "react-router-dom";

type Props = {
  item: Room;
};

const RoomItem = ({item}: Props) => {
  const listeningNow = item.usersOnline.length;

  return (
    <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      <div className="flex gap-10">
        {item.name}
        {!!listeningNow && (
          <span className="text-green-400">
            {listeningNow} Человек уже в этой комнате!
          </span>
        )}
      </div>
      <Link to={'/room/' + item._id}>Перейти</Link>
    </div>
  );
};

export default RoomItem;
