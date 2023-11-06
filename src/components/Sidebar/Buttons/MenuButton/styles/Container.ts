import { Box, styled } from "@mui/material"
import { BorderRadiuses } from "@/common/enums/borderRadiuses"

const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: min-content;
  overflow: hidden;
  padding: 1rem;
  border-radius: ${BorderRadiuses.lg};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`
export default Container
