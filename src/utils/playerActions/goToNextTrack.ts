import { store } from '@/store';
import { setCurrentTrack } from '@/store/slices/playerSlice';
import { finishCurrentTrack } from '@/store/slices/roomSlice';

export function goToNextTrack() {
  const room = store.getState().room.room;
  store.dispatch(setCurrentTrack(room.trackQueue[0]));
  store.dispatch(finishCurrentTrack());
}
