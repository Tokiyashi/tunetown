import {Room} from '@/common/types/room';
import {backendUrl} from '@/common/constants/url';
import axios from 'axios';

export async function updateRoom(value: Room) {
  await axios.put(backendUrl + '/rooms', {
    ...value,
  });
}

export async function deleteRoom(id: string) {
  await axios.delete(backendUrl + '/rooms/' + id);
}