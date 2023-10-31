import React from 'react';
import {Room} from '@/common/types/room';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

type Props = {
  item: Room;
  onDelete: (id: string) => void;
};

const RoomItem = ({item, onDelete}: Props) => {
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
      <div className='flex gap-2 items-center'>
        <Link to={'/room/' + item._id}>Перейти</Link>
        <Button color='error' onClick={() => onDelete(item._id)}>Удалить</Button>
      </div>
    </div>
  );
};

export default RoomItem;
