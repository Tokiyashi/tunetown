import { Box, styled } from "@mui/material"
import { BorderRadiuses } from "@/common/enums/borderRadiuses"

const Container = styled(Box)`
  display: flex;
  gap: 1rem;
  max-height: 7rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${BorderRadiuses.xl};
  justify-content: space-between;
  align-items: center;
`
export default Container
