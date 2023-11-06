import { getTheme } from "@/utils/theme"
import { createTheme, ThemeProvider } from "@mui/material"
import { RootState } from "@/store"
import { useSelector } from "react-redux"
import { useMemo } from "react"

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useSelector((state: RootState) => state.mode)
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider
