import { ThemeMode } from "@/common/enums/themeMode"

export const darkTheme = {
  typography: {
    fontFamily: '"Comfortaa", cursive',
  },
  palette: {
    mode: ThemeMode.DarkTheme,
    primary: {
      main: "#7c39ee",
    },
    background: {
      default: "#1a1a1e",
      paper: "#24242C",
    },
    secondary: {
      main: "#ffffff",
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
}
