import React from 'react';
import {useSelector} from 'react-redux';
import {RootState, store} from '@/store';
import {setUser} from '@/store/slices/userSlice';
import {DEFAULT_USER} from '@/common/constants/defaultUser';
import {Button, Link} from "@mui/material";

const Header = () => {
  const {currentUser} = useSelector((state: RootState) => state.user);

  return (
    <div className="justify-end p-5 flex align-middle">
      {currentUser._id ? (
        <div className="flex gap-4">
          <h2>{currentUser.name}</h2>
          <Button
            onClick={() => store.dispatch(setUser(DEFAULT_USER))}
          >
            Выйти
          </Button>
        </div>
      ) : (
        <Link href="/login">Войти</Link>
      )}
    </div>
  );
};

export default Header;
