import { Box, styled } from "@mui/material"
import { BorderRadiuses } from "@/common/enums/borderRadiuses"

const Container = styled(Box)`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.paper};
  align-items: center;
  padding: 0.4rem;
  border-radius: ${BorderRadiuses.lg};
  justify-content: space-between;
  cursor: pointer;
  border: 0.2rem solid ${({ theme }) => theme.palette.background.paper};

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`
export default Container
