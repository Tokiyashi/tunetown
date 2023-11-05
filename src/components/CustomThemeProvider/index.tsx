import { useMemo } from 'react'
import { getTheme } from "@/utils/theme"
import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material"
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const CustomeThemeProvider = ({children}: {children: React.ReactNode}) => {
  const { mode } = useSelector((state: RootState) => state.mode)
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default CustomeThemeProvider