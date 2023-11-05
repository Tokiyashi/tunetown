import React from "react"
import Container from "./styles/Container"
import { UploadedTrack } from "@/common/types/musicItem"
import { Typography } from "@mui/material"

type Props = {
  item: UploadedTrack
}

const TitleAndAuthor = ({ item }: Props) => {
  return (
    <Container>
      <Typography noWrap>{item.title}</Typography>
      <Typography>{item.artistName}</Typography>
    </Container>
  )
}

export default TitleAndAuthor
