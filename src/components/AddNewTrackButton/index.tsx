import React, {useEffect, useState} from "react"
import {Autocomplete, Box, inputLabelClasses, TextField, useTheme} from "@mui/material"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { Playlist } from "@/common/types/playlist"
import { UploadedTrack } from "@/common/types/musicItem"
import {useDebounce} from "@/utils/hooks/useDebounce";
import {fetchPlaylist} from "@/store/slices/playlistsSlice";
import {AppDispatch} from "@/store";
import {useDispatch} from "react-redux";

type Props = {
  playlist: Playlist
}

const AddNewTrackButton = ({ playlist }: Props) => {
  const [loading,setLoading]=useState(false);
  const [value, setValue] = useState("")
  const [suggestedValues, setSuggestedValues] =useState<UploadedTrack[]>([]);
    const debouncedValue = useDebounce(value, 1000)
    const dispatch: AppDispatch = useDispatch()
    const theme = useTheme()

    async function handleAddTrack(track: UploadedTrack | null) {
    if (!track){
        return
    }
      setLoading(true)
    await axios.put(backendUrl + "/playlists", {
      ...playlist,
      allTracks: [
        ...playlist.allTracks,
        track
      ],
    })
      setLoading(false);
      setValue('');
      dispatch(fetchPlaylist(playlist._id))
  }

  const getSuggestions = async ()=>{
      if (!debouncedValue){
          return
      }

      const res = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + debouncedValue,
      {
        headers: {
          "X-RapidAPI-Key":
              "48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
      )
      const result = await res.json()

      const test = result.data as {preview: string, artist: {name: string}, title: string}[]
      const a = test.map(item=>(
      {
        url: item.preview,
            artistName: item.artist.name,
          title: item.title,
      }
      ) as UploadedTrack)

      setSuggestedValues(a)
  }

    useEffect(() => {
        getSuggestions()
    }, [debouncedValue]);

  const handleInput= async (val: string)=>{
      setValue(val)
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Autocomplete
          disabled={loading}
          options={suggestedValues}
          inputValue={value}
          getOptionLabel={(option)=>option.artistName  + " - " + option.title}
          onInputChange={(_,val)=>handleInput(val)}
          renderInput={(options)=><TextField {...options} InputLabelProps={{sx: {
              color: "white",
              [`&.${inputLabelClasses.shrink}`]: {
              color: theme.palette.primary.main,
          }
          }}} color="secondary" label='Введите название или автора' />}
          fullWidth
          onChange={(_, value)=>handleAddTrack(value)}
      />
      {/*<Button variant="contained">*/}
      {/*  Добавить новый трек*/}
      {/*</Button>*/}
    </Box>
  )
}

export default AddNewTrackButton
