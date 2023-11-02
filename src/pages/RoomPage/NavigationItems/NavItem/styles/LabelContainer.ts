import { Box, styled } from "@mui/material"

const LabelContainer = styled(Box)`
  display: flex;
  padding: 0.2rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`
export default LabelContainer
