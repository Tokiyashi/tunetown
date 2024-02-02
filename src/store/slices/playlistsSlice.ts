import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Playlist} from "@/common/types/playlist";
import {apiGetPlaylist, apiGetPlaylists} from "@/api/playlist";

type PlaylistsState = {
    playlists: Playlist[]
    currentPlaylist: Playlist | null
}

const initialState :PlaylistsState={
    playlists:[],
    currentPlaylist: null
}

export const fetchPlaylists = createAsyncThunk('playlists/get', apiGetPlaylists)

export const fetchPlaylist = createAsyncThunk('playlist/get', apiGetPlaylist)

export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
            state.playlists = action.payload
        })
        builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
            state.currentPlaylist = action.payload
        })
    }
})

export default playlistsSlice.reducer
