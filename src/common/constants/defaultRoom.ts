import { Room } from '@/common/types/room';

export const DEFAULT_ROOM: Room = {
  _id: '',
  name: '',
  allTracks: [],
  currentTrack: null,
  trackQueue: [],
  creatorId: '',
  usersOnline: [],
};
