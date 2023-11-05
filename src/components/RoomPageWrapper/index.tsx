import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type Props = {
  children: React.ReactNode
  title: string
}

const RoomPageWrapper = ({children, title}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full gap-3 flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">{title}</h3>
        <Button onClick={() => navigate('../main')}>Вернуться Назад</Button>
      </div>
      {children}
    </div>
  );
};

export default RoomPageWrapper;