import { Playlist } from "@/common/types/playlist"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"

export const updatePlaylist = async (
  value: Partial<Playlist> & { _id: string }
) => {
  await axios.put(backendUrl + "/playlists", value)
}

export const deletePlaylist = async (id: string) =>
  await axios.delete(backendUrl + "/playlists/" + id)


export const apiGetPlaylists = async (userId: string) => {
  const result = await axios.get<Playlist[]>(backendUrl + "/playlists?creatorId=" + userId);
  return result.data
}

export const apiGetPlaylist = async (id: string) => {
  const result = await axios.get<Playlist>(backendUrl + "/playlists/" + id);
  return result.data;
}