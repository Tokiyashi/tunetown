import React from "react"
import { Typography } from "@mui/material"

type Props = {
  title: string
  children: React.ReactNode
}

const Page = ({ children, title }: Props) => {
  return (
    <div className="flex gap-3 flex-col w-full">
      <Typography fontSize="1.6rem">{title}</Typography>
      {children}
    </div>
  )
}

export default Page
