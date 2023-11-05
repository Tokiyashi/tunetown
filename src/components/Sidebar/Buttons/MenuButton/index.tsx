import React from "react"
import { Link } from "react-router-dom"
import { responsiveText } from "@/utils/mixins/responsiveText"

type Props = {
  item: { label: string; href: string }
}
const MenuButton = ({ item }: Props) => {
  const { label, href } = item

  return (
    <Link to={href}>
      <div className="w-full h-min flex hover:bg-dark-main rounded-2xl overflow-hidden p-6">
        <span className={`${responsiveText}`}>{label}</span>
      </div>
    </Link>
  )
}

export default MenuButton
