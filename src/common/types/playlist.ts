import { UploadedTrack } from "@/common/types/musicItem"

export type Playlist = {
  _id: string
  name: string
  creatorId: string
  allTracks: UploadedTrack[]
}
