import { Box, styled } from "@mui/material"
import { BorderRadiuses } from "@/common/enums/borderRadiuses"

const BaseMusicItem = styled(Box)`
  display: flex;
  gap: 0.8rem;
  padding: 0.5rem;
  max-height: 5rem;
  width: 100%;
  align-items: flex-end;
  border-radius: ${BorderRadiuses.lg};
  background-color: ${({ theme }) => theme.palette.background.paper};
    
    &:hover{
        filter: brightness(1.5);
    }
`
export default BaseMusicItem
