import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/common/types/user';
import { DEFAULT_USER } from '@/common/constants/defaultUser';

export type PlayerState = {
  currentUser: User;
};

const initialState: PlayerState = {
  currentUser: DEFAULT_USER,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
