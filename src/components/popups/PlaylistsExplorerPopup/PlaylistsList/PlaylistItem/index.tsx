import {FC} from 'react';
import {Button, Card, CardActions, CardHeader, CardMedia} from "@mui/material";
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
        <Card sx={{width:'20rem', height:'20rem', backgroundColor:'white'}}>
            <CardHeader sx={{width:'100%', height: '20%'}} title={item.name} />
            <CardMedia sx={{width:'100%', height: '70%'}} image='https://img.freepik.com/free-vector/summer-pool-party-illustration_33099-403.jpg?w=1480&t=st=1706807497~exp=1706808097~hmac=902e92231f959f52e5742286da489b5339d5e1e73201a5be7b32c76ef06016a1' />
            <CardActions sx={{width:'100%', height: '10%', padding: 0}}>
                <Button onClick={handleClick} fullWidth>Выбрать</Button>
            </CardActions>
        </Card>
    );
};

export default PlaylistItem;