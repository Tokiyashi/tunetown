import { AnyAction, Middleware } from 'redux';
import {
  finishCurrentTrack,
  setCurrentTrack,
  setRoom,
  startRoom,
} from '@/store/slices/roomSlice';
import { updateRoom } from '@/api/room';

export const roomMiddleware: Middleware =
  api => next => (action: AnyAction) => {
    const result = next(action);
    const actionTypes = [
      setRoom,
      startRoom,
      setCurrentTrack,
      finishCurrentTrack,
    ];
    if (actionTypes.map(item => item.type).includes(action.type)) {
      updateRoom(api.getState().room.room);
    }

    return result;
  };
