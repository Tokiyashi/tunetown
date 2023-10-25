import React from 'react';
import notes from '@/assets/icons/notes.svg';
import {RootState} from '@/store';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {Badge, Box, Card, Tooltip} from "@mui/material";

type Props = {
  label: string;
  href: string;
};

const NavItem = ({label, href}: Props) => {
  const {room} = useSelector((state: RootState) => state.room);

  return (
    <Link to={href}>

      <Tooltip title="Список из всех треков которые были загружены в эту комнату">
        <Card className="w-32 relative hover:scale-110 h-32 bg-card-bg">
          <Badge
            className="bg-card-bg text-white p-2 rounded-xl absolute top-0 right-0"
          >
            {room.allTracks.length}
          </Badge>
          <img src={notes} alt="notes" className="w-full absolute top-0 h-full"/>
          <Box className="flex justify-center bg-white">
            <span className="text-black">{label}</span>
          </Box>
        </Card>
      </Tooltip>
    </Link>
  );
};

export default NavItem;
