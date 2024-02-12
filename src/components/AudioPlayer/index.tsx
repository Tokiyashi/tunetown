import { useSelector } from "react-redux"
import { RootState } from "@/store"
import React, { useRef } from "react"
import TrackInfo from "@/components/AudioPlayer/TrackInfo"
import Buttons from "./Buttons"
import { useListenPause } from "@/utils/hooks/useListenPause"
import { goToNextTrack } from "@/utils/playerActions/goToNextTrack"
import Volume from "@/components/AudioPlayer/Volume";

const AudioPlayer = () => {
  const { currentTrack, audioSrc } = useSelector(
    (state: RootState) => state.player
  )

  const audioRef = useRef<HTMLAudioElement>(null)
  useListenPause(audioRef)

  async function handleEnded() {
    if (!audioRef.current) {
      return
    }
    goToNextTrack()
  }

    function handleVolumeChange(volume: number) {
        if (!audioRef.current) {
            return;
        }
        audioRef.current.volume = volume;
    }

  if (!currentTrack) {
    return <></>
  }

  return (
    <div style={{borderRadius: '2rem 2rem 0 0'}} className="w-full overflow-hidden  bg-card-bg  max-w-full h-full items-center justify-between flex bottom-5 bg-black-rgba">
      <audio
        onEnded={handleEnded}
        autoPlay
        ref={audioRef}
        title="asdasd"
        src={audioSrc}
      />
      <TrackInfo currentTrack={currentTrack} />
      <Buttons audioRef={audioRef} />
      <Volume onChange={handleVolumeChange}/>
    </div>
  )
}

export default AudioPlayer
