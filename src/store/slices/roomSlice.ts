import { createSlice } from "@reduxjs/toolkit"
import { Room } from "@/common/types/room"
import { DEFAULT_ROOM } from "@/common/constants/defaultRoom"

export type RoomState = {
  room: Room
}

const initialState: RoomState = {
  room: DEFAULT_ROOM,
}

export const roomSlice = createSlice({
  name: "trackList",
  initialState,
  reducers: {
    // setQueue: (state, action) => {
    //   state.queue = action.payload
    // },
    // addNewTrack: (state, action) => {
    //   state.queue = [...state.queue, action.payload]
    // },
    // finishCurrentTrack: (state) => {
    //   state.queue.shift()
    // },
    addTrackToQueue: (state, action) => {
      state.room.trackQueue.unshift(action.payload)
    },
    getRoom: (state, action) => {
      state.room = action.payload
    },
    setRoom: (state, action) => {
      state.room = action.payload
    },
    startRoom: (state) => {
      state.room.currentTrack = state.room.allTracks[0]
      state.room.trackQueue = state.room.allTracks.slice(1)
    },
    setCurrentTrack: (state, action) => {
      state.room.currentTrack = action.payload
    },
    finishCurrentTrack: (state) => {
      state.room.currentTrack = state.room.trackQueue[0]
      state.room.trackQueue.shift()
    },
  },
})

export const {
  setRoom,
  getRoom,
  setCurrentTrack,
  startRoom,
  finishCurrentTrack,
  addTrackToQueue,
} = roomSlice.actions
export default roomSlice.reducer
