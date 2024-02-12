import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Link} from "react-router-dom";


const NoItemsPlaceholder: FC = () => {
    return (
        <Box>
            <Typography color='secondary'>У вас пока что нет плейлистов... Чтобы начать слушать музыку у вас должен быть хотя бы один плейлист</Typography>
            <Link to='/playlists' >
                <Typography color='primary'>Перейти к плейлистам!</Typography></Link>
        </Box>
    );
};

export default NoItemsPlaceholder;