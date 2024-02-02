import React, { useEffect, useState } from "react"
import { VolumeTypes } from "@/common/enums/volumeTypes"
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded"
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded"
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded"
import {Slider} from "@mui/material";

type Props = {
  onChange: (value: number) => void
}

const volumeIcon = new Map([
  [VolumeTypes.Muted, VolumeOffRoundedIcon],
  [VolumeTypes.Medium, VolumeDownRoundedIcon],
  [VolumeTypes.High, VolumeUpRoundedIcon],
])

const Volume = ({ onChange }: Props) => {
  const [currentValue, setCurrentValue] = useState(
    Number(localStorage.getItem("volume") || 50)
  )
  const handleCurrentValueChange = (value: number|number[]) => {

    if (Array.isArray(value)){
      return
    }

    const newValue = Math.floor(value)
    const formattedValue = newValue / 100
    setCurrentValue(newValue)
    onChange(formattedValue)
    localStorage.setItem("volume", newValue.toString())
  }

  const isLoud = currentValue > 80

  const volume = isLoud ? VolumeTypes.High : VolumeTypes.Medium
  const volumeSize = Math.floor(currentValue) === 0 ? VolumeTypes.Muted : volume

  const Icon = volumeIcon?.get(volumeSize) || VolumeOffRoundedIcon

  useEffect(() => {
    onChange(currentValue / 100)
  }, [])

  return (
    <div className="justify-center items-center overflow-hidden w-1/3 p-3 h-1/2 gap-2 flex">
      <Icon className="h-full w-auto" />
      <Slider
        sx={{width:'50%'}}
        color="primary"
        className="accent-main w-1/2"
        value={currentValue}
        onChange={(_, value)=>handleCurrentValueChange(value)}
      />
    </div>
  )
}

export default Volume
