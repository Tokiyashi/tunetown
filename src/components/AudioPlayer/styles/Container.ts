import { Box, styled } from "@mui/material"
import { BorderRadiuses } from "@/common/enums/borderRadiuses"

const Container = styled(Box)`
  display: flex;
  width: 100%;
  max-height: 40rem;
  overflow: hidden;
  height: 100%;
  border-radius: ${BorderRadiuses.xl};
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.background.paper};
`
export default Container
