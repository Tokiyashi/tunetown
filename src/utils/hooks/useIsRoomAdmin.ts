'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect, useState } from 'react';

export function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { room } = useSelector((state: RootState) => state.room);
  const { currentUser } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setIsAdmin(room.creatorId === currentUser?._id);
  }, [room, currentUser]);

  return isAdmin;
}
