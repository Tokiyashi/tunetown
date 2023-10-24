import { UploadedTrack } from '@/common/types/musicItem';
import { createSlice } from '@reduxjs/toolkit';

export type PlayerState = {
  currentTrack: UploadedTrack | null;
  audioSrc: string;
};

const initialState: PlayerState = {
  currentTrack: null,
  audioSrc: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.audioSrc = action.payload?.url;
    },
  },
});

export const { setCurrentTrack } = playerSlice.actions;
export default playerSlice.reducer;
