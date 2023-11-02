import React from "react"
import notes from "@/assets/icons/notes.svg"
import { Link } from "react-router-dom"
import { Card, CardMedia, Tooltip, Typography } from "@mui/material"
import LabelContainer from "./styles/LabelContainer"

type Props = {
  label: string
  href: string
}

const NavItem = ({ label, href }: Props) => {
  return (
    <Link className="w-1/4" to={href}>
      <Tooltip title="Список из всех треков которые были загружены в эту комнату">
        <Card className="w-full h-full">
          <CardMedia
            sx={{
              height: "80%",
              objectFit: "contain",
              backgroundSize: "contain",
            }}
            image={notes}
          />
          <LabelContainer>
            <Typography color="secondary">{label}</Typography>
          </LabelContainer>
        </Card>
      </Tooltip>
    </Link>
  )
}

export default NavItem
