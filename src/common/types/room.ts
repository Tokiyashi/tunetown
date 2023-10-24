import { UploadedTrack } from '@/common/types/musicItem';

export type Room = {
  _id: string;
  name: string;
  allTracks: UploadedTrack[];
  currentTrack: UploadedTrack | null;
  trackQueue: UploadedTrack[];
  creatorId: string;
  usersOnline: { name: string; id: string }[];
};
