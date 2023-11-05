import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material"

type ModeState = {
  mode: PaletteMode
}

const initialState: ModeState = {
  mode: "dark"
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark"; 
    }
  }
})

export const { changeMode } = modeSlice.actions
export default modeSlice.reducer