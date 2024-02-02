import React, {FC} from 'react';
import {Box, Modal, Typography, useTheme} from '@mui/material';
import PlaylistsList from "@/components/popups/PlaylistsExplorerPopup/PlaylistsList";

type Props = {
    open: boolean;
    onClose: ()=>void
}

const PlaylistsExplorerPopup: FC<Props> = ({open, onClose}) => {
    const theme = useTheme()

    return (
        <Modal open={open} onClose={onClose}>
            <Box width='50%' margin="5rem auto" sx={{borderRadius: '0.4rem'}} bgcolor={theme.palette.background.default} height="60%">
                <Typography color='secondary'>Выберите плейлист:</Typography>
                <PlaylistsList/>
            </Box>
        </Modal>
    );
};

export default PlaylistsExplorerPopup;