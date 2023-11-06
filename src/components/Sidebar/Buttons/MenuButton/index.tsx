import React from "react"
import { Link } from "react-router-dom"
import { responsiveText } from "@/utils/mixins/responsiveText"
import Container from "./styles/Container"

type Props = {
  item: { label: string; href: string }
}
const MenuButton = ({ item }: Props) => {
  const { label, href } = item

  return (
    <Link to={href}>
      <Container>
        <span className={`${responsiveText}`}>{label}</span>
      </Container>
    </Link>
  )
}

export default MenuButton
