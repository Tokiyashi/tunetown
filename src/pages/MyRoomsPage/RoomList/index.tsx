import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {backendUrl} from '@/common/constants/url';
import {Room} from '@/common/types/room';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';
import RoomItem from './RoomItem';

async function getRooms(userId: string) {
  const response = await axios.get(backendUrl + '/rooms?userId=' + userId);
  return response.data;
}

const RoomList = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const {currentUser} = useSelector((state: RootState) => {
    return state.user;
  });

  async function init() {
    const res = await getRooms(currentUser._id);
    setRooms(res);
  }

  useEffect(() => {
    void init();
  }, [currentUser._id]);

  return (
    <div className="flex flex-col gap-3">
      {rooms.map(item => (
        <RoomItem item={item} key={item._id}/>
      ))}
    </div>
  );
};

export default RoomList;
