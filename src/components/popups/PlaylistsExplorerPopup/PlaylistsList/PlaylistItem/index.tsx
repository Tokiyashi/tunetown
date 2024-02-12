import {FC} from 'react';
import { Box, Button, } from "@mui/material";
import {Playlist} from "@/common/types/playlist";
import {AppDispatch, RootState} from "@/store";
import {useDispatch, useSelector} from "react-redux";
import {setRoom} from "@/store/slices/roomSlice";

type Props = {
    item: Playlist
}

const PlaylistItem: FC<Props> = ({item}) => {
    const { room } = useSelector((state: RootState) => state.room)
    const dispatch: AppDispatch = useDispatch()

    const handleClick = async ()=> {
        dispatch(setRoom({...room, allTracks: item.allTracks}))
    }

    return (
        <Box display="flex" width="100%">
            <Button variant='contained' onClick={handleClick} fullWidth>{item.name}</Button>
        </Box>
    );
};

export default PlaylistItem;