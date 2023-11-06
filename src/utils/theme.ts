import { ThemeMode } from "@/common/enums/themeMode"
import { darkTheme } from "@/common/constants/darkTheme"
import { lightTheme } from "@/common/constants/lightTheme"

const theme = new Map([
  [ThemeMode.DarkTheme, darkTheme],
  [ThemeMode.LightTheme, lightTheme],
])

export const getTheme = (mode: ThemeMode) => {
  return theme.get(mode)
}
