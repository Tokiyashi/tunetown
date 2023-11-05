import { Playlist } from "@/common/types/playlist"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"

export const updatePlaylist = async (
  value: Partial<Playlist> & { _id: string }
) => {
  await axios.put(backendUrl + "/playlists", value)
}
