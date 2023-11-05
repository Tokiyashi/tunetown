import { PaletteMode } from "@mui/material"

export const getTheme = (mode: PaletteMode) => ({
  typography: {
    fontFamily: '"Comfortaa", cursive',
  },
  palette: {
    mode,
    ...(mode === "dark")
    ? {
      primary: {
        main: "#7c39ee",
      },
      background: {
        default: "#24242C",
        paper: "#24242C",
      },
      secondary: {
          main: "#ffffff",
      },
    }
    : {

    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#e4e4e4",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#7e7e7e",
            },
            "&:hover fieldset": {
              borderColor: "#7c39ee",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7c39ee",
            },
          },
        },
      },
    },
  },
})