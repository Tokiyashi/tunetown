import { UploadedTrack } from "@/common/types/musicItem"
import { createSlice } from "@reduxjs/toolkit"

export type PlayerState = {
  currentTrack: UploadedTrack | null
  audioSrc: string
  openedSidebar: boolean
}

const initialState: PlayerState = {
  currentTrack: null,
  audioSrc: "",
  openedSidebar: false
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload
      state.audioSrc = action.payload?.url
    },
    setOpenedSidebar: (state, action)=>{
      state.openedSidebar = action.payload
    }
  },
})

export const { setCurrentTrack, setOpenedSidebar } = playerSlice.actions
export default playerSlice.reducer
