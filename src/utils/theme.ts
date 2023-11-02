import { createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: '"Comfortaa", cursive',
  },
  palette: {
    primary: {
      main: "#7c39ee",
    },
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
