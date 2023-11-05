import { createSlice } from "@reduxjs/toolkit"
import { ThemeMode } from "@/common/enums/themeMode";

type ModeState = {
  mode: ThemeMode
}

const initialState: ModeState = {
  mode: ThemeMode.DarkTheme
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === ThemeMode.DarkTheme ? ThemeMode.LightTheme : ThemeMode.DarkTheme; 
    }
  }
})

export const { changeMode } = modeSlice.actions
export default modeSlice.reducer