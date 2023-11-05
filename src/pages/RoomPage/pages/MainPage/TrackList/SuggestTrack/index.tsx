import React from "react"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const SuggestTrack = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate("../suggest")} variant="contained">
      Предложить трек!
    </Button>
  )
}

export default SuggestTrack
