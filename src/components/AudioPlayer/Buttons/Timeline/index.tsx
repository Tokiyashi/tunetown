import React, { RefObject, useEffect, useState } from "react"
import { convertToMinutes } from "@/utils/convertToMinutes"
import { Slider } from "@mui/material"

type Props = {
  audioRef: RefObject<HTMLAudioElement>
  onChange: (value: number) => void
}

const Timeline = ({ audioRef, onChange }: Props) => {
  const [currentTimeProgress, setCurrentTimeProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const handleCurrentTimeChange = (value: number) => {
    if (!audioRef.current) {
      return
    }

    const newCurrentTime = value * (audioRef.current.duration / 100)
    onChange(newCurrentTime)
  }

  useEffect(() => {
    const t = setInterval(() => {
      if (!audioRef.current) {
        return
      }

      const timeProgress =
        (audioRef.current?.currentTime / audioRef.current?.duration) * 100
      setCurrentTimeProgress(timeProgress)
      setCurrentTime(audioRef.current?.currentTime)
    }, 100)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="w-full flex flex-col">
      <Slider
        value={currentTimeProgress || 0}
        onChange={(event, newValue) =>
          handleCurrentTimeChange(newValue as number)
        }
      />
      <div className="w-full flex justify-between">
        <h3>{convertToMinutes(currentTime)}</h3>
        <h3>{convertToMinutes(audioRef.current?.duration || 0)}</h3>
      </div>
    </div>
  )
}

export default Timeline
