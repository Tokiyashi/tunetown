import { RefObject, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState, store } from "@/store"
import { setCurrentTrack } from "@/store/slices/playerSlice"
import { goToNextTrack } from "@/utils/playerActions/goToNextTrack"
import Timeline from "./Timeline"
import Volume from "@/components/AudioPlayer/Volume"
import { IconButton } from "@mui/material"
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded"
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded"
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded"
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded"

type Props = {
  audioRef: RefObject<HTMLAudioElement>
}

const Buttons = ({ audioRef }: Props) => {
  const [paused, setPaused] = useState(false)
  const { audioSrc, currentTrack } = useSelector(
    (state: RootState) => state.player
  )

  function handlePause() {
    if (!audioRef?.current) {
      return
    }

    setPaused(!paused)
    audioRef.current[paused ? "play" : "pause"]()
    store.dispatch(setCurrentTrack({ ...currentTrack, paused: !paused }))
  }

  function handleCurrentTimeChange(currentTime: number) {
    if (!audioRef.current) {
      return
    }
    audioRef.current.currentTime = currentTime
  }

  function handleVolumeChange(volume: number) {
    if (!audioRef.current) {
      return
    }
    audioRef.current.volume = volume
  }

  async function handleFinishTrack() {
    goToNextTrack()
  }

  useEffect(() => {
    setPaused(false)
  }, [audioSrc])

  useEffect(() => {
    if (!audioRef?.current) {
      return
    }
    setPaused(!!currentTrack?.paused)
  }, [currentTrack?.paused])

  const playerButtons = [
    {
      icon: SkipPreviousRoundedIcon,
      action: () => {},
    },
    {
      icon: paused ? PlayCircleRoundedIcon : PauseCircleFilledRoundedIcon,
      action: handlePause,
    },
    {
      action: handleFinishTrack,
      icon: SkipNextRoundedIcon,
    },
  ]

  return (
    <div className="h-full bg-card-bg justify-between flex-col items-center w-full flex">
      <Timeline audioRef={audioRef} onChange={handleCurrentTimeChange} />
      <div className="flex justify-between h-1/3 overflow-hidden w-5/6">
        {playerButtons.map((item, index) => (
          <IconButton sx={{ width: "30%" }} key={index} onClick={item.action}>
            {<item.icon color="primary" />}
          </IconButton>
        ))}
      </div>
      <Volume onChange={handleVolumeChange} />
    </div>
  )
}

export default Buttons
