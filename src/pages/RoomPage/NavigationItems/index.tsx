import React from "react"
import NavItem from "./NavItem"

const NavigationItems = () => {
  return (
    <div className="flex h-1/5 w-full">
      <NavItem label="Все треки" href={`../all-tracks`} />
    </div>
  )
}

export default NavigationItems
