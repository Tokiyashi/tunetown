import { store } from "@/store"
import { setCurrentTrack } from "@/store/slices/playerSlice"
import { finishCurrentTrack, setRoom } from "@/store/slices/roomSlice"

export function goToNextTrack() {
  const room = store.getState().room.room
  if (room.trackQueue.length === 0) {
    store.dispatch(
      setRoom({ ...room, trackQueue: [...room.trackQueue, ...room.allTracks] })
    )
    store.dispatch(setCurrentTrack(room.allTracks[0]))
    store.dispatch(finishCurrentTrack())
    return
  }
  store.dispatch(setCurrentTrack(room.trackQueue[0]))
  store.dispatch(finishCurrentTrack())
}
