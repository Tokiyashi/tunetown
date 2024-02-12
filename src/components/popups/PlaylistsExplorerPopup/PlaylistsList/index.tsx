import React, {FC, useEffect} from 'react';
import PlaylistItem from './PlaylistItem';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState, store} from "@/store";
import {Box} from "@mui/material";
import {fetchPlaylists} from "@/store/slices/playlistsSlice";
import NoItemsPlaceholder from '../NoItemsPlaсeholder';


const PlaylistsList: FC = () => {
    const playlists = useSelector((state:RootState) => state.playlist.playlists)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaylists(store.getState().user.currentUser._id));
    }, []);

    return (
        <Box p='2rem' gap="1rem" display='flex' maxHeight="100%" sx={{flexWrap: 'wrap'}}>
            {!playlists.length?
                <NoItemsPlaceholder/>
                :
            playlists.map(item=>
                <PlaylistItem item={item} key={item._id} />
            )}
        </Box>
    );
};

export default PlaylistsList;