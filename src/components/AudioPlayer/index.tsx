import { useSelector } from "react-redux"
import { RootState } from "@/store"
import React, { useRef } from "react"
import TrackInfo from "@/components/AudioPlayer/TrackInfo"
import Buttons from "./Buttons"
import { useListenPause } from "@/utils/hooks/useListenPause"
import { goToNextTrack } from "@/utils/playerActions/goToNextTrack"
import Container from "./styles/Container"

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

  if (!currentTrack) {
    return <></>
  }

  return (
    <Container>
      <audio
        onEnded={handleEnded}
        autoPlay
        ref={audioRef}
        title="asdasd"
        src={audioSrc}
      />
      <TrackInfo currentTrack={currentTrack} />
      <Buttons audioRef={audioRef} />
    </Container>
  )
}

export default AudioPlayer
