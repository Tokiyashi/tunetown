import { ThemeMode } from "@/common/enums/themeMode"

export const lightTheme = {
  typography: {
    fontFamily: '"Comfortaa", cursive',
  },
  palette: {
    mode: ThemeMode.LightTheme,
    primary: {
      main: "#7c39ee",
    },
    background: {
      default: "#ffffff",
      paper: "#e5e5e5",
    },
    secondary: {
      main: "#000000",
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
            color: "black",
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
}
