import React from 'react';
import {Typography} from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
}

const PageWithTitle = ({children, title}: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <Typography fontSize='1.6rem'>{title}</Typography>
      {children}
    </div>
  );
};

export default PageWithTitle;