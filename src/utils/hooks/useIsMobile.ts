import { useMediaQuery } from "@mui/material"

export const useIsMobile = () => useMediaQuery("(max-width: 768px)")
